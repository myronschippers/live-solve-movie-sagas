/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import SettingsApplications from '@material-ui/icons/SettingsApplications';

// core components
// import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../../material-kit/components/CustomButtons/Button.js";

import styles from "../../material-kit/assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  let backArrowContent = null;

  if (props.backHandler != null) {
    backArrowContent = (
      <ListItem className={classes.listItem}>
        <IconButton color="secondary" onClick={props.backHandler}>
          <ArrowBackIos fontSize="large" />
        </IconButton>
      </ListItem>
    );
  }

  return (
    <List className={classes.list}>
      {backArrowContent}
      <ListItem className={classes.listItem}>
        {props.children}
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Admin"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="#/admin"
            className={classes.navLink}
          >
            <SettingsApplications />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
