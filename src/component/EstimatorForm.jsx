import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../style/estimator.css";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import logo from "../images/logo.png";

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
  container: {
    border: "1px solid black",
    padding:"20px",
    boxShadow: "3px 3px 2px 2px grey"

  },
}));
export default function EstimatorForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img
              src={logo}
              alt="logo"
              width="40px"
              style={{ background: "white" }}
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Andela Covid-19 Estimator
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="form">
        <Container maxWidth="xs" className={classes.container}>
          <Grid container spacing={1}>
          <Grid item xs={12} >
              <Typography variant="subtitle2" gutterBottom>
                Hi! We are collecting data as regarding the Covid-19 Virus. This
                Data will help us to build novelty COVID-19 infections estimator
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="population">Total Population</label>
            </Grid>
            <Grid item xs={12}>
              <input
                className="inputs"
                id="population"
                type="number"
                placeholder="Population"
                data-population
              />
            </Grid>
            <Grid item xs={12} >
                <label htmlFor="time">Time to Elapse</label>

                <input
                  type="number"
                  className="inputs"
                  id="time"
                  placeholder="Time to Elapse"
                  data-time-to-elapse
                />
              </Grid>
              <Grid item xs={12} >
                <label htmlFor="cases">Reported Cases</label>

                <input
                  type="number"
                  className="inputs"
                  id="cases"
                  placeholder="Reported Cases"
                  data-reported-cases
                />
              </Grid>
              <Grid item xs={12} >
                <label htmlFor="beds">Total hospital Beds</label>

                <input
                  type="number"
                  className="inputs"
                  id="beds"
                  placeholder="Total Hospital Beds"
                  data-total-hospital-beds
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <label htmlFor="period-type">Period Type: </label>

                <select
                  className="inputs"
                  id="period-type"
                  data-period-type
                >
                  <option disabled defaultValue>
                    Select Period
                  </option>
                  <option value="days">Days</option>
                  <option value="weeks">Weeks</option>
                  <option value="months">Months</option>
                </select>
              </Grid>
              <Grid item xs={12} >
                <button className="submit">Submit</button>
              </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
