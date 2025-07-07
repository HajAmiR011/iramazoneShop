import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { IoMdMenu } from "react-icons/io";
import ListTag from "../../ui/ListTag/ListTag";
import { RiInboxArchiveFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router";

const TemporaryDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box
        component={"nav"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "10px",
          alignItems: "center",
        }}
      >
        <NavLink
          className={(navDate) =>
            navDate.isActive ? "bg-slate-200 block w-full" : "block w-full"
          }
          to={"/"}
        >
          <ListTag data={"home"} />
        </NavLink>
        <NavLink
          className={(navDate) =>
            navDate.isActive ? "bg-slate-200 block w-full" : "block w-full"
          }
          to={"/about"}
        >
          <ListTag data={"about"} />
        </NavLink>
        <NavLink
          className={(navDate) =>
            navDate.isActive ? "bg-slate-200 block w-full" : "block w-full"
          }
          to={"/blogs"}
        >
          <ListTag data={"blogs"} />
        </NavLink>
        <NavLink
          className={(navDate) =>
            navDate.isActive ? "bg-slate-200 block w-full" : "block w-full"
          }
          to={"/gallery"}
        >
          <ListTag data={"gallery"} />
        </NavLink>
      </Box>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "10px 3px",
        }}
      >
        {["Inbox", "Starred", "Drafts", "Send email"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <RiInboxArchiveFill size={24} />
                ) : (
                  <MdEmail size={24} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <IoMdMenu size={34} color="white" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default TemporaryDrawer;
