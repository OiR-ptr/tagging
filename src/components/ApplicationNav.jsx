import React from "react";
import PropTypes from "prop-types";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { BottomNavigationAction } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import StarBorder from "@material-ui/icons/StarBorder";
import ListIcon from "@material-ui/icons/List";

const ApplicationNav = props => {
  const { nowAddress, changeNavigation } = props;

  return (
    <BottomNavigation
      showLabels
      value={nowAddress}
      onChange={(_, newValue) => {
        changeNavigation(newValue);
      }}
    >
      <BottomNavigationAction label="Search" icon={<Search />} value="/" />
      <BottomNavigationAction
        label="Result"
        icon={<ListIcon />}
        value="/search"
      />
      <BottomNavigationAction
        label="Bookmark"
        icon={<StarBorder />}
        value="/bookmarks"
      />
    </BottomNavigation>
  );
};

ApplicationNav.propTypes = {
  nowAddress: PropTypes.string.isRequired,
  changeNavigation: PropTypes.func.isRequired
};

export default ApplicationNav;
