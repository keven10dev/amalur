// * Images
import cmpLogosImg from "../media/logos.png";
import logoImg from "../media/logo1.png";
import starsImg from "../media/Star.png";
import taza1 from "../media/taza1.png";
import taza2 from "../media/taza2.png";
import taza3 from "../media/taza3.png";

// * MUI Components
import { Box, Container, Typography, styled, Avatar, Card, CardContent } from "@mui/material";
import { Star as StarIcon, StarHalf as StarHalfIcon } from "@mui/icons-material";

// * MUI Styled Components
const CustomBoxCtn = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

const ReviewBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: theme.spacing(2),
}));

const CupImagesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  img: {
    width: "60px", // Ajustar el tamaño para que no llame tanto la atención
    height: "auto",
  },
}));

export default function Reviews() {
  const reviews = [
    { name: "Juan Martínez", review: "Ambiente acogedor y gran atención al cliente.", date: "Hace 1 mes", rating: 5 },
    { name: "Carlos García", review: "Buenos pinchos, magnífico el café y muy buen trato.", date: "Hace 2 meses", rating: 4 },
    { name: "Marta Pérez", review: "Excelente lugar para disfrutar de un buen café en compañía.", date: "Hace 3 meses", rating: 4.5 },
  ];

  // Ordenamos las reseñas por fecha (más recientes primero)
  reviews.sort((a, b) => parseInt(a.date.split(" ")[1]) - parseInt(b.date.split(" ")[1]));

  return (
    <Box>
      <CustomBoxCtn>
        <Box sx={{ marginBottom: 3 }}>
          <img src={logoImg} alt="logo" style={{ maxWidth: "80px" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Más de 290 valoraciones
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#181b20",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 1,
            }}
          >
            Categoría: Cafetería
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#181b20", mr: 1 }}
            >
              4.1
            </Typography>
            {[...Array(4)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#FFD700" }} />
            ))}
            <StarIcon sx={{ color: "#ddd" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            290 valoraciones
          </Typography>
        </Box>
      </CustomBoxCtn>

      <Container sx={{ mt: 4 }}>
        {reviews.map((review, index) => (
          <ReviewBox key={index}>
            <Card sx={{ width: "100%", maxWidth: 400, mb: 3, boxShadow: 3 }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: `hsl(${Math.floor(Math.random() * 360)}, 50%, 70%)`,
                      marginRight: 2,
                    }}
                  >
                    {review.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {review.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#7D8589" }}>
                      {review.date}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#FFD700", fontSize: "18px" }} />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarHalfIcon sx={{ color: "#FFD700", fontSize: "18px" }} />
                  )}
                  {[...Array(5 - Math.ceil(review.rating))].map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#ddd", fontSize: "18px" }} />
                  ))}
                </Box>

                <Typography variant="body2" sx={{ color: "#181b20" }}>
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </ReviewBox>
        ))}
      </Container>

      <Container sx={{ mt: 4 }}>
        <CupImagesContainer>
          <img src={taza1} alt="Taza de café 1" />
          <img src={taza2} alt="Taza de café 2" />
          <img src={taza3} alt="Taza de café 3" />
        </CupImagesContainer>
      </Container>
    </Box>
  );
}
