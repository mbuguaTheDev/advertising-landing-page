import { Box, Button, Grid, Typography } from "@mui/material";
import hero_img from "../../public/images/hero_bg.jpg";
import Calculator from "./calculator";
import SiteNavbar from "./navbar";

const HeroSection = () => {
  return (
    <Box
      sx={{
        pt: 15,
        pb: 8,
        display: "flex",
        justifyContent: "center",
        background: `url(${hero_img.src}) no-repeat center`,
        backgroundSize: "cover",
      }}
    >
      <SiteNavbar />
      <Grid
        container
        justifyContent='space-between'
        spacing={2}
        sx={{
          p: 2,
          maxWidth: 1170,
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant='h2' mb={2} lineHeight={1.2} color='common.white'>
            Illuminate your world with high-quality LED screens and superior
            sound
          </Typography>
          <Typography variant='h5' mb={3} color='common.white'>
            Experience stunning visuals from LED screens to live audio systems.
            We handle sales, assembly, and installation to bring your vision to
            life.
          </Typography>
          <Button variant='contained'>Learn More</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Calculator />
        </Grid>
      </Grid>
    </Box>
  );
};
export default HeroSection;
