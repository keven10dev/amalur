// * Components
import CustomButton from "./CustomButton";

// * Images
import buyIcon from "../media/buy_icon.png";
import sellIcon from "../media/sell_icon.png";
import rentIcon from "../media/rent_icon.png";

// * MUI Components
import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography, styled, Card } from "@mui/material";

// * MUI Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
  },
}));

const MapCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  padding: theme.spacing(3),
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  border: "1px solid #E0E0E0",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

export default function Guide() {
  return (
    <Box
    id='guide'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        ¿Quieres encontrarnos?
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Aquí estamos listos para servirte..
        </Typography>
      </CustomBox>

      <MapCard>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.6567562395544!2d-3.1172101249426095!3d43.321774779134535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4ef7cbc19fd397%3A0x4185c247255099d0!2sCafeteria%20Amalur!5e0!3m2!1ses!2ses!4v1693310787649!5m2!1ses!2ses"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapCard>
    </Box>
  );
}
