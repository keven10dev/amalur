// * Components
import properties from "../data/properties";
import House from "./House";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const PropertiesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "16px", // Espacio entre las tarjetas
  flexWrap: "wrap", // Permite que las tarjetas se acomoden en varias filas
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const PropertyCard = styled(Box)({
  width: "100%",
  maxWidth: "300px", // Tamaño máximo de cada tarjeta
  backgroundColor: "#fff",
  borderRadius: "8px",
  overflow: "hidden", // Asegura que las imágenes no se desborden
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para dar diseño
});

const PropertyImage = styled("img")({
  width: "100%",
  height: "200px", // Altura fija para todas las imágenes
  objectFit: "cover", // Ajusta la imagen sin deformarla
});

export default function Properties() {
  return (
    <Box
    id='properties'
     sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
          >
            Qué ofrecemos
          </Typography>
          <Typography sx={{ color: "#5A6473", fontSize: "16px", my: 3 }}>
            Esto es solo una pizca de lo que ofrecemos visítanos y descubre más...
          </Typography>
        </PropertiesTextBox>

        <PropertiesBox>
          {properties.map((property) => (
            <PropertyCard key={property.id}>
              <PropertyImage src={property.img} alt={`Property ${property.id}`} />
              <House
                price={property.price}
                address={property.address}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                space={property.space}
              />
            </PropertyCard>
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
}
