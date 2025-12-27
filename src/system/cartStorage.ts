import type { EnumProductType } from "../model/EnumProductType";

export const CART_KEY = "cart";

export type CartItem = {
  id: string;
  type: EnumProductType.DUSEK | EnumProductType.NADDUSEK;
  width: number;
  length: number;
  price: number;
  options?: {
    thickness?: number;
  };
};

export function getCart(): CartItem[] {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function addToCart(item: CartItem) {
  const cart = getCart();
  cart.push(item);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(id: string) {
  const cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}
