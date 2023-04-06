import { AppBar, Toolbar, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import MobileNavigation from "./mobile-navigation";
import { useState } from "react";

export type MenuItems = { item: string; link: string }[];

const SiteNavbar = () => {
  const menu_items: MenuItems = [
    {
      item: "About Us",
      link: "#",
    },
    {
      item: "Blog",
      link: "#",
    },
    {
      item: "Certificates",
      link: "#",
    },
    {
      item: "Contact Us",
      link: "#",
    },
  ];

  //mobile drawer
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <AppBar
      sx={{
        bgcolor: "rgba(0, 0, 0,0.6)",
      }}
    >
      <Toolbar disableGutters>
        <Grid
          container
          alignItems='center'
          spacing={2}
          sx={{
            maxWidth: 1170,
            margin: "0 auto",
            color: "primary.main",
          }}
        >
          <Grid item xs={1} sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton onClick={openDrawer}>
              <MenuIcon fontSize='large' />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Image
              style={{
                position: "absolute",
                bottom: "-70%",
              }}
              src='/images/KENYA-LED-LOGO.svg'
              width={100}
              height={100}
              alt='KENYA LED SCREEN COMPANY'
            />
          </Grid>
          <Grid
            item
            xs={9}
            sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}
          >
            {menu_items.map((item) => (
              <Link
                key={item.item}
                href={item.link}
                style={{ textDecoration: "none", color: "unset" }}
              >
                <Typography variant='h5' textTransform='uppercase'>
                  {item.item}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
      <MobileNavigation
        menu_items={menu_items}
        closeDrawer={closeDrawer}
        open={open}
      />
    </AppBar>
  );
};
export default SiteNavbar;
