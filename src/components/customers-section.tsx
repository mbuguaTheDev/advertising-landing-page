import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

const customer_list = [
  {
    name: "AXA BAR",
    image_url: "/images/customers/AXA_BAR.jpg",
  },
  {
    name: "BAPTIST CHURCH THIKA ROAD",
    image_url: "/images/customers/BAPTIST_THIKA_RD.jpg",
  },
  {
    name: "PCEA K ROAD",
    image_url: "/images/customers/PCEA_K_ROAD.jpg",
  },
  {
    name: "PCEA K SOUTH",
    image_url: "/images/customers/PCEA_K_SOUTH.jpg",
  },
  {
    name: "PCEA NAIROBI WEST",
    image_url: "/images/customers/PCEA_NAIROBI_WEST.jpg",
  },
  {
    name: "VITA MARKETING",
    image_url: "/images/customers/VITA _MARKETING.jpg",
  },
  {
    name: "DELIVERANCE GITHURAI 45",
    image_url: "/images/customers/DELIVERANCE_GITHURAI.jpg",
  },
  {
    name: "KLC",
    image_url: "/images/customers/KLC.jpg",
  },
  {
    name: "MLA",
    image_url: "/images/customers/MLA.jpg",
  },
  {
    name: "NECLA_SPA",
    image_url: "/images/customers/NECLA_SPA.jpg",
  },
];

const Customers = () => {
  return (
    <Box
      sx={{
        bgcolor: "#CBCBCB",
        py: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant='h4' align='center'>
        Our Customers
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ p: 2, maxWidth: 1170 }}
        justifyContent='center'
      >
        {customer_list.map((customer) => (
          <Grid item key={customer.name} xs={12} sm={2.4}>
            <Image
              src={customer.image_url}
              alt={customer.name}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: "100%", height: 200, borderRadius: 5 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Customers;
