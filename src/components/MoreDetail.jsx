// * Images
import houseCardImg from "../media/Aurrera Athletic!.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(5),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 5, 0, 5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(5),
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "13%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: "#000",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#7B8087",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  maxWidth: "50%", // Limita el ancho al 50% del contenedor
  height: "auto", // Mantiene las proporciones de la imagen
  borderRadius: theme.spacing(1), // Agrega esquinas redondeadas
  [theme.breakpoints.down("md")]: {
    maxWidth: "80%", // Ajusta el ancho en dispositivos pequeños
  },
}));

export default function MoreDetail() {
  return (
    <Container sx={{ marginTop: 6 }}>
      <CustomBox>
        {/* Imagen sin efectos adicionales */}
        <StyledImage
          src={houseCardImg}
          alt="Athletic Club"
        />
        <Box>
          <Divider />
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            Todos los partidos del Athletic club en un solo lugar.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            Disfruta de todos los partidos del Athletic Club en un excelente
            ambiente lleno de hinchas al igual que tú, dispuestos a demostrar
            su amor por el club.
          </Typography>
        </Box>
      </CustomBox>
      <CustomTextBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>Buen ambiente</LargeText>
          <SmallText>Clientes de toda la vida</SmallText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>Confortable</LargeText>
          <SmallText>Todo en madera, mantiene su estilo</SmallText>
        </Box>

        <Box
        id='more-detail'
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>Animado</LargeText>
          <SmallText>Concurrido en las mañanas y las tardes</SmallText>
        </Box>
      </CustomTextBox>
    </Container>
  );
}
