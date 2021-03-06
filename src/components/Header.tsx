import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Menu,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import {
  AddCircle,
  BusinessCenter,
  Menu as MenuIcon,
  TableChart,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "#0000001c",
      color: "#73a23c",
    },
    menu: {
      "& ul": {
        backgroundColor: theme.palette.primary.contrastText,
      },
      "& a": {
        color: theme.palette.primary.main,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: 800,
    },
    icon: {
      marginLeft: 7,
    },
  })
);

export const Header = () => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.menu}
        >
          <MenuItem
            onClick={handleClose}
            component={NavLink}
            to="/user/tacklebox"
          >
            Tacklebox
            {/* <NavLink to="/user/tacklebox">Tackle Box</NavLink> */}
            <BusinessCenter
              color="primary"
              className={classes.icon}
            ></BusinessCenter>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={NavLink}
            to="/user/fish-view"
          >
            Livewell
            <TableChart color="primary" className={classes.icon}></TableChart>
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={NavLink}
            to="/user/fish-enter"
          >
            Add Fish
            <AddCircle color="primary" className={classes.icon}></AddCircle>
          </MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          Livewell App
        </Typography>
        {isAuthenticated && (
          <Button color="inherit" onClick={() => logout()}>
            Sign Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
