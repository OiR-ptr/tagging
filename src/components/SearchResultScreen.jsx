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

const SearchResultScreen = ({ hitList, searchWord }) => {
  const [links, setLinks] = React.useState([]);
  const [subheader, setSubheader] = React.useState("none");

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

  React.useEffect(() => {
    if (hitList.length !== 0 || searchWord) {
      setSubheader(`search: '${searchWord}' ${hitList.length}件`);
    }
  }, [hitList, searchWord]);

  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">{subheader}</ListSubheader>}
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
  ).isRequired,
  searchWord: PropTypes.string.isRequired
};

export default SearchResultScreen;
