import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactForm from "./contact-form";

const FooterSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#202020",
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography color='info.main' variant='h4' align='center'>
        Contact Us
      </Typography>
      <Grid container sx={{ maxWidth: 1170, p: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography textTransform='uppercase' color='info.main' variant='h5'>
            Call:
          </Typography>
          <Link href='tel:+254781073727' style={{ textDecoration: "none" }}>
            <Typography variant='h6' color='info.main'>
              +254 781 07 37 27
            </Typography>
          </Link>
          <Link href='tel:+254720629621' style={{ textDecoration: "none" }}>
            <Typography variant='h6' color='info.main'>
              +254 720 629 621
            </Typography>
          </Link>
          <Typography
            textTransform='uppercase'
            color='info.main'
            variant='h5'
            mt={2}
          >
            Email:
          </Typography>
          <Link
            href='mailto:sales@kenyaledscreen.com'
            style={{ textDecoration: "none" }}
          >
            <Typography variant='h6' color='info.main'>
              sales@kenyaledscreen.com
            </Typography>
          </Link>

          <Stack direction='row' spacing={2} my={2}>
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <FacebookIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <TwitterIcon />
            </Avatar>
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <InstagramIcon />
            </Avatar>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardHeader title='Quick Inquiry Form' />
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box width='100%' maxWidth={1170}>
        <Divider sx={{ bgcolor: "#555658" }} />
        <Typography align='center' color='#555658' mt={1}>
          &copy; 2023. Kenya LED Screens Company. All rights reserved
        </Typography>
        <Link
          href='https://opencubekenya.com'
          style={{ textDecoration: "none" }}
        >
          <Typography align='center' color='primary'>
            Developed by Opencube Technologies
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
export default FooterSection;
