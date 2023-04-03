import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import products_list from "./product-list.json";

const OurProducts = () => {
  return (
    <Box sx={{ backgroundColor: "#151414", py: 3 }}>
      <Typography variant='h4' color='info.main' align='center'>
        Our Products
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 1170, margin: "20px auto" }}>
        {products_list.map((product) => (
          <Grid key={product.name} item xs={12} sm={4}>
            <Card sx={{ height: "100%", bgcolor: "#EEFFFC" }}>
              <Box width='100%' height={250}>
                <Image
                  src={product.image}
                  alt={`${product.name}`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: "100%", height: 250 }}
                />
              </Box>

              <CardContent>
                <Typography variant='h5' color='primary'>
                  {product.name}
                </Typography>
                <Typography>{product.description}</Typography>
                <Typography mt={2} variant='subtitle1'>
                  Use case: {product.type}
                </Typography>
                <Typography variant='subtitle1'>
                  Pixel Pitch: {product.pixel_pitch}
                </Typography>
                <Typography variant='subtitle1'>
                  Features: {product.features}
                </Typography>
                <Typography variant='subtitle1'>
                  Cabinet Size: {product.cabinet_size}
                </Typography>
                <Typography variant='subtitle1'>{product.extras}</Typography>
                <Button sx={{ mt: 3 }} variant='contained'>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Button variant='outlined' color='info' sx={{ margin: "30px auto" }}>
          View All Products
        </Button>
      </Grid>
    </Box>
  );
};
export default OurProducts;
