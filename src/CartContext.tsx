import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  CART_KEY,
  getCart,
  addToCart,
  removeFromCart,
  type CartItem,
} from "../src/system/cartStorage";

type CartContextType = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: CartItem) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => getCart());

  const sync = useCallback(() => {
    setItems(getCart());
  }, []);

  const add = (item: CartItem) => {
    addToCart(item);
    sync();
  };

  const remove = (id: string) => {
    removeFromCart(id);
    sync();
  };

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === CART_KEY) sync();
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [sync]);

  return (
    <CartContext.Provider
      value={{
        items,
        count: items.length,
        subtotal: items.reduce((s, i) => s + i.price, 0),
        add,
        remove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
};
