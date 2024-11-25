import React, { useState, useEffect } from "react";
import CustomButton from "./CustomButton";
import logoImg from "../media/logo1.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Contacts,
  FeaturedPlayList,
  Home,
  ListAlt,
  MiscellaneousServices,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
  Toolbar,
} from "@mui/material";

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  transition: "background-color 0.3s ease",
}));

const NavbarToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
  paddingRight: theme.spacing(3),  // Añade espacio en el lado derecho
  paddingLeft: theme.spacing(3),   // Añade espacio en el lado izquierdo
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  maxWidth: "100px",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    margin: "0 auto",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: "#4F5361",
  fontWeight: "bold",
  cursor: "pointer",
  "&:hover": {
    color: "#fff",
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const ListComponent = () => (
  <List
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: 200,
    }}
  >
    {["Home", "Features", "Services", "Products", "About"].map(
      (text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <Home />}
              {index === 1 && <FeaturedPlayList />}
              {index === 2 && <MiscellaneousServices />}
              {index === 3 && <ListAlt />}
              {index === 4 && <Contacts />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      )
    )}
  </List>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <NavbarContainer
      position="fixed"
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <NavbarToolbar>
        <Box 
          sx={{ 
            display: "flex", 
            alignItems: "center",
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "space-between", md: "flex-start" }
          }}
        >
          <MenuBox onClick={() => setShowMenu(true)}>
            <MenuIcon sx={{ color: scrolled ? "#333" : "#FFFFFF" }} />
          </MenuBox>
          <NavbarLogo src={logoImg} alt="logo" />
        </Box>

        <NavbarLinkBox>
          <NavbarLink>Home</NavbarLink>
          <NavbarLink>Features</NavbarLink>
          <NavbarLink>Services</NavbarLink>
          <NavbarLink>Products</NavbarLink>
          <NavbarLink>About</NavbarLink>
        </NavbarLinkBox>

        <Box 
          sx={{ 
            display: { xs: "none", md: "flex" }, 
            alignItems: "center", 
            columnGap: 2, 
            mr: 2  // Añade margen derecho a los botones
          }}
        >
          <NavbarLink>AMALUR</NavbarLink>
          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="AMALUR"
          />
        </Box>
      </NavbarToolbar>

      <Drawer
        anchor="left"
        open={showMenu}
        onClose={() => setShowMenu(false)}
      >
        <ListComponent />
      </Drawer>
    </NavbarContainer>
  );
};

export default Navbar;
