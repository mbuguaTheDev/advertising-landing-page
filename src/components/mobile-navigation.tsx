import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { MenuItems } from "./navbar";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Drawer from "@mui/material/Drawer";

type MobileNavigationProps = {
  menu_items: MenuItems;
  closeDrawer: () => void;
  open: boolean;
};

const MobileNavigation = ({
  menu_items,
  closeDrawer,
  open,
}: MobileNavigationProps) => {
  const list = (
    <Box sx={{ width: 250, pt: 3 }} role='presentation'>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton color='primary' onClick={closeDrawer}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Box>
      <List>
        {menu_items.map((item) => (
          <Link
            key={item.item}
            href={item.link}
            style={{ textDecoration: "none", color: "unset" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.item} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor='left' open={open}>
      {list}
    </Drawer>
  );
};

export default MobileNavigation;
