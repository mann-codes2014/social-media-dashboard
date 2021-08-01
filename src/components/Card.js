import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DashboardIcon from "../icons/Icon";
const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
  followers: {
    textTransform: "uppercase",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DashboardCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <DashboardIcon name={props.icon} />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.username}
        </Typography>

        <Typography className={classes.pos} variant="h3">
          {props.totalFollowersCount}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.followers}
        >
          Followers
        </Typography>
        <Typography variant="body2">
          {props.todayFollowersCount} Today
        </Typography>
      </CardContent>
    </Card>
  );
}
