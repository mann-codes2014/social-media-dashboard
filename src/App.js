import { Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DashboardCard from "./components/Card";
import OverViewCard from "./components/OverViewCard";
import { FACEBOOK, INSTAGRAM, TWITTER, YOUTUBE } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    flexGrow: 1,
    margin: 0,
    padding: theme.spacing(6),
    backgroundColor: props.darkMode ? "#1E202A" : "#fff",
    color: props.darkMode ? "#fff" : "#1E202A",
  }),
  bottomContainer: {
    marginTop: 20,
  },
}));
const light = {
  palette: {
    type: "light",
    background: {
      paper: "#F5F7FF",
      default: "#fff",
    },
  },
};
const dark = {
  palette: {
    type: "dark",
    background: {
      default: "#000",
    },
  },
};
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles({ darkMode });
  const theme = createMuiTheme(darkMode ? dark : light);
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h4">Social Media Dashboard</Typography>
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel
              control={
                <Switch
                  title="Dark Mode"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              }
              label="Dark Mode"
              labelPlacement="start"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Total Followers: 23,004</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <DashboardCard
              icon={FACEBOOK}
              username="@nathanf"
              totalFollowersCount="1987"
              todayFollowersCount="12"
            ></DashboardCard>
          </Grid>
          <Grid item xs={3}>
            <DashboardCard
              icon={TWITTER}
              username="@nathanf"
              totalFollowersCount="1044"
              todayFollowersCount="99"
            ></DashboardCard>
          </Grid>
          <Grid item xs={3}>
            <DashboardCard
              icon={INSTAGRAM}
              username="@realnathanf"
              totalFollowersCount="11k"
              todayFollowersCount="1099"
            ></DashboardCard>
          </Grid>
          <Grid item xs={3}>
            <DashboardCard
              icon={YOUTUBE}
              username="Nathan F."
              totalFollowersCount="8239"
              todayFollowersCount="144"
            ></DashboardCard>
          </Grid>
        </Grid>

        <Grid container className={classes.bottomContainer}>
          <Grid item xs={12}>
            <Typography variant="h5">Overview - Today</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <OverViewCard
              heading="Page Views"
              icon={FACEBOOK}
              count="100"
              ratio="3"
            ></OverViewCard>
          </Grid>
          <Grid item xs={3}>
            <OverViewCard
              heading="Likes"
              icon={FACEBOOK}
              count="52"
              ratio="2"
            ></OverViewCard>
          </Grid>
          <Grid item xs={3}>
            <OverViewCard
              heading="Likes"
              icon={INSTAGRAM}
              count="5462"
              ratio="2257"
            ></OverViewCard>
          </Grid>
          <Grid item xs={3}>
            <OverViewCard
              heading="Profile Views"
              icon={INSTAGRAM}
              count="100"
              ratio="3"
            ></OverViewCard>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <OverViewCard
              heading="Retweets"
              icon={TWITTER}
              count="117"
              ratio="303"
            ></OverViewCard>
          </Grid>
          <Grid item xs={3}>
            <OverViewCard
              heading="Likes"
              icon={TWITTER}
              count="507"
              ratio="553"
            ></OverViewCard>
          </Grid>
          <Grid item xs={3}>
            <OverViewCard
              heading="Likes"
              icon={YOUTUBE}
              count="107"
              ratio="19"
            ></OverViewCard>
          </Grid>
          <Grid item xs={3}>
            <OverViewCard
              heading="Total Views"
              icon={YOUTUBE}
              count="1407"
              ratio="12"
            ></OverViewCard>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
