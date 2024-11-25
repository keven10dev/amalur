import React, { useState, useEffect } from 'react';
import CustomButton from "./CustomButton";
import HeroImg from "../media/hero_img.png";
import Logo from "../media/logo1.png";
import { Box, Container, Typography, styled, AppBar, Toolbar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const CustomHeroBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  gap: theme.spacing(5),
  padding: theme.spacing(5),
  minHeight: "80vh",
  justifyContent: "center",
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    textAlign: "left",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  fontWeight: "bold",
  color: "#F0F0F0",
  textShadow: "3px 3px 5px rgba(0, 0, 0, 0.4)",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

const NavButton = styled(Button)(({ theme, scrolled }) => ({
  color: scrolled ? '#000000' : '#ffffff',
  '&:hover, &:focus': {
    color: '#00ff00',
  },
}));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        boxShadow: scrolled ? 1 : 0,
        transition: 'background-color 0.3s ease-in-out'
      }}
    >
      <Container>
        <Toolbar sx={{ height: '100px', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <img src={Logo} alt="Logo" style={{ height: '80px', width: 'auto' }} />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavButton scrolled={scrolled} onClick={() => handleNavigation('hero')}>Inicio</NavButton>
            <NavButton scrolled={scrolled} onClick={() => handleNavigation('guide')}>Dónde estamos</NavButton>
            <NavButton scrolled={scrolled} onClick={() => handleNavigation('properties')}>Qué ofrecemos</NavButton>
            <NavButton scrolled={scrolled} onClick={() => handleNavigation('more-detail')}>Productos</NavButton>
            <NavButton scrolled={scrolled} onClick={() => handleNavigation('featured')}>Sobre nosotros</NavButton>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: scrolled ? '#000000' : '#ffffff' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleNavigation('hero')}>Inicio</MenuItem>
              <MenuItem onClick={() => handleNavigation('guide')}>Dónde estamos</MenuItem>
              <MenuItem onClick={() => handleNavigation('properties')}>Qué ofrecemos</MenuItem>
              <MenuItem onClick={() => handleNavigation('more-detail')}>Productos</MenuItem>
              <MenuItem onClick={() => handleNavigation('featured')}>Sobre nosotros</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Container>
        <Navbar />
        <CustomHeroBox>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              color: "#F7F3E9",
              fontWeight: "500",
              mt: 10,
              mb: 4,
            }}
          >
            Bienvenido a Amalur, pide tu café calentito.
          </Typography>
          <Title variant="h2">
            Descubre un lugar que une Pasión y Calidad.
          </Title>

          <Box sx={{ color: "#2C2B2B" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#F0F0F0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                mb: 1,
              }}
            >
              ¡Vive la Pasión del Fútbol con Nosotros!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#F0F0F0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                mb: 1,
              }}
            >
              Disfruta de los Mejores Partidos del Athletic Club en Vivo
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#F0F0F0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                mb: 1,
              }}
            >
              Ambiente vibrante y acogedor
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#F0F0F0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                mb: 1,
              }}
            >
              Sorteos emocionantes y lotería
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#F0F0F0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                mb: 1,
              }}
            >
              Máquinas de apuestas para añadir emoción a cada jugada
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#F0F0F0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
              }}
            >
              ¡No te lo pierdas!
            </Typography>
          </Box>

          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="Descubre nuestra ubicación"
            heroBtn={true}
          />
        </CustomHeroBox>
      </Container>
    </Box>
  );
}