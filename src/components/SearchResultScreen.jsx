import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListSubheader } from "@material-ui/core";

function ListItemLink(properties) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListItem button component="a" {...properties} />;
}

const updateTab = url => {
  if (chrome.tabs) {
    chrome.tabs.update({ url }, tab => {
      console.log(tab);
    });
  } else {
    console.log(url);
  }
};

const SearchResultScreen = ({ hitList }) => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    const results = hitList.map(item => {
      return (
        <ListItemLink
          href={item.url}
          key={item.id}
          onClick={() => updateTab(item.url)}
        >
          <ListItemText primary={item.title} secondary="nantekotoda" />
        </ListItemLink>
      );
    });
    setLinks(results);
  }, [hitList]);

  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Title</ListSubheader>}
    >
      {links}
    </List>
  );
};

SearchResultScreen.propTypes = {
  hitList: PropTypes.arrayOf(
    PropTypes.shape({
      dataAdded: PropTypes.number,
      id: PropTypes.string.isRequired,
      index: PropTypes.number,
      parentId: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SearchResultScreen;
