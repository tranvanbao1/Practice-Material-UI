import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
  Button
} from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props?.open ? "flex" : "none"),
      width: "70%"
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel: {
      [theme.breakpoints.up("sm")]: {
          display: "none"
      }
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props?.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
  },
}));
function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Logo
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LogoSm
        </Typography>
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            src="https://images.pexels.com/photos/8647812/pexels-photo-8647812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
