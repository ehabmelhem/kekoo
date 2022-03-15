import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import profile from "../Componeneties/profile.jpg";
import { flexbox } from "@material-ui/system";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    },
    justifyContent: "center"
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));

export default function AvatarPic() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={profile} className={classes.large} />
    </div>
  );
}
