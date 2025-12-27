import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useCart } from "./CartContext";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { label: "Početna", url: "/" },
  { label: "Proizvodi", url: "/proizvodi" },
  { label: "Kalkulator cena", url: "/kalkulator-cena" },
  { label: "Kontakt", url: "/kontakt" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count } = useCart();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} className="app-drawer text-center">
      <div
        className="w-full flex justify-center"
        style={{ backgroundColor: "#232223" }}
      >
        <img
          src="logo.png"
          alt="logo"
          className="py-2"
          style={{ height: 100 }}
        />
      </div>
      <Divider />
      <List sx={{ textAlign: "center" }}>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.url} className="text-center">
                {item.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="flex app-topbar">
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#232223", height: 100 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to={"/"}>
            <img
              src="logo.png"
              alt="logo"
              className="py-2"
              style={{ height: 100 }}
            />
          </Link>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              height: "100%",
              flex: 1,
            }}
          >
            <div className="h-full flex flex-1 pb-3 gap-6 items-end justify-end">
              <div className="flex gap-6 items-center">
                {navItems.map((item) => (
                  <Link to={item.url}>{item.label}</Link>
                ))}
                <Link to="/korpa">
                  <IconButton aria-label="cart">
                    <Badge badgeContent={count} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </div>
            </div>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              height: "100%",
              flex: 1,
            }}
          >
            <div className="h-full flex flex-1 pb-3 gap-6 items-end justify-end">
              <div className="flex gap-6 items-center">
                <Link to="/korpa">
                  <IconButton aria-label="cart">
                    <Badge badgeContent={count} color="secondary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </div>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}
