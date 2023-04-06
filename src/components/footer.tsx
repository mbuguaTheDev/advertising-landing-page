import {
  Avatar,
  Box,
  Card,
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
      <Grid container sx={{ maxWidth: 1170, p: 2 }}>
        <Grid item xs={12} sm={4}>
          <Typography textTransform='uppercase' color='info.main' variant='h5'>
            Contact Us
          </Typography>
          <Typography variant='h6' color='info.main'>
            Phone Number 1
          </Typography>
          <Typography variant='h6' color='info.main'>
            Phone Number 2
          </Typography>
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
          <Card sx={{ bgcolor: "#555658" }}>
            <CardContent>
              <Typography variant='h4' color='info.main'>
                Contact Form / Anything
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box width='100%' maxWidth={1170}>
        <Divider sx={{ bgcolor: "#555658" }} />
        <Typography align='center' color='#555658' mt={1}>
          &copy; 2023. Kenya LED Screen Company. All rights reserved
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
