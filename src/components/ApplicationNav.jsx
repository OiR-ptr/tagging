import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { BottomNavigationAction } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import StarBorder from "@material-ui/icons/StarBorder";
import ListIcon from "@material-ui/icons/List";

const ApplicationNav = props => {
  const [value] = React.useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(_, newValue) => {
        props.changeNavigation(newValue);
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

export default ApplicationNav;
