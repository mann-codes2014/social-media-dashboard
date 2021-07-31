import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DashboardIcon from "../icons/Icon";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

export default function OverViewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="subtitle2" gutterBottom>
              {props.heading}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <DashboardIcon name={props.icon} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              {props.count}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="caption" gutterBottom>
              {props.ratio} %
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
