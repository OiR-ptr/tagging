import React from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Typography } from "@material-ui/core";
import ListPagination from "../containers/ListPaginationContainer";

function ListItemLink(properties) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListItem button component="a" {...properties} />;
}

const updateTab = url => {
  if (chrome.tabs) {
    chrome.tabs.update({ url });
  }
};

const SearchResultScreen = ({ pageContents, hitLength, searchWord }) => {
  const [links, setLinks] = React.useState([]);
  const [subheader, setSubheader] = React.useState(
    <Typography>none</Typography>
  );

  React.useEffect(() => {
    const results = pageContents.map(item => {
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
  }, [pageContents]);

  React.useEffect(() => {
    if (hitLength !== 0 || searchWord) {
      setSubheader(
        <Typography>
          search: {searchWord} {hitLength}件
        </Typography>
      );
    }
  }, [hitLength, searchWord]);

  return (
    <>
      <ListPagination />
      <List
        component="nav"
        subheader={<ListSubheader component="div">{subheader}</ListSubheader>}
        style={{ maxHeight: "320px", overflow: "scroll" }}
      >
        {links}
      </List>
    </>
  );
};

SearchResultScreen.propTypes = {
  pageContents: PropTypes.arrayOf(
    PropTypes.shape({
      dataAdded: PropTypes.number,
      id: PropTypes.string.isRequired,
      index: PropTypes.number,
      parentId: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  hitLength: PropTypes.number.isRequired,
  searchWord: PropTypes.string.isRequired
};

export default SearchResultScreen;
