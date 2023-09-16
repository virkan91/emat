import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SatelliteAltIcon from "@mui/icons-material/SatelliteAlt";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import React from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IconButton } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { Link } from "react-router-dom";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import InfoIcon from "@mui/icons-material/Info";

export default function Burger() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor:any, open:any) => (event:any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuName = [
    "Hakkımızda",
    "Hizmetlerimiz",
    "Referanslar",
    "Haberler",
    "İletişim",
  ];

  const list = (anchor:any) => (
      <Box
      sx={{  width: anchor === "top" || anchor === "bottom" ? "auto" : 250, backgroundColor: "#ccc" , paddingBottom: "362px" , color: "white"  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuName.map((e, i) => {
          if (e == "Hakkımızda") {
            return (
              <Link to="about">
                <ListItem key={e} disablePadding >
                  <ListItemButton>
                    <ListItemIcon>
                      <AiFillHome className=" text-white" />
                    </ListItemIcon>
                    <ListItemText primary={e} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          } else if (e == "Hizmetlerimiz") {
            return (
              <Link to="/services">
                <ListItem key={e} disablePadding>
                  <ListItemButton>
                    <ListItemIcon className=" text-white">
                      <MiscellaneousServicesIcon className=" text-white" />
                    </ListItemIcon>
                    <ListItemText primary={e} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          } else if (e == "Referanslar") {
            return (
              <Link to="/references">
                <ListItem key={e} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SettingsAccessibilityIcon className=" text-white" />
                    </ListItemIcon>
                    <ListItemText primary={e} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          
          } else if (e == "Haberler") {
            return (
              <Link to="/news">
                <ListItem key={e} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FiberNewIcon className=" text-white" />
                    </ListItemIcon>
                    <ListItemText primary={e} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          } else if (e == "İletişim"){
            return (
              <Link to="/communication">
                <ListItem key={e} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SatelliteAltIcon
                        fontSize="small"
                        className=" text-white"
                      />
                    </ListItemIcon>
                    <ListItemText primary={e} />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          }
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <AiOutlineMenu className="text-[40px] text-[#FFFFFF]" />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
