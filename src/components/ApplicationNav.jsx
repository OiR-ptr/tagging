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
      onChange={(event, newValue) => {
        props.changeNavigation(newValue);
      }}
    >
      <BottomNavigationAction label="Search" icon={<Search />} />
      <BottomNavigationAction label="Result" icon={<ListIcon />} />
      <BottomNavigationAction label="Bookmark" icon={<StarBorder />} />
    </BottomNavigation>
  );
};

export default ApplicationNav;
