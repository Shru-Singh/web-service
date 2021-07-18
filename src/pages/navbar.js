import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
         <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundColor: "black",
            padding: "10px 0",
          }}
          elevation={0}
        >
          <Toolbar>
            <Typography variant="h4" className={classes.title} onClick={() => (window.location.href = "/")}>
              Web Service
            </Typography>
            <Button color="inherit" className="navbarbtn" onClick={() => (window.location.href = "/about")}>
              About Us
            </Button>
            <Button
              color="inherit"
              className="navbarbtn"
              style={{ margin: "0 50px" }}
              onClick={() => (window.location.href = "/services")}
            >
              Services
            </Button>
            <Button
              className="navbarbtn"
              style={{ marginRight: "70px" }}
              color="inherit"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </div>
        </>
    )
}

export default Navbar;