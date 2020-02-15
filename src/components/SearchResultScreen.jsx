import React from "react";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(properties) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListItem button component="a" {...properties} />;
}

const SearchResultScreen = ({ hitList }) => {
  const [links, setLinks] = React.useState([]);

  React.useEffect(() => {
    const results = hitList.map(item => {
      console.log(item);
      return (
        <ListItemLink href="https://www.google.co.jp/" key={item.id}>
          <ListItemText primary="SPAM" />
        </ListItemLink>
      );
    });
    setLinks(results);
  }, [hitList]);

  return (
    <List component="nav" aria-label="main mailbox folders">
      <ListItem button>
        <ListItemText primary="Trash" />
      </ListItem>
      <Divider />
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
