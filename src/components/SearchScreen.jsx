import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";

const SearchScreen = ({
  bookmarks,
  tagMap,
  loadBookmarks,
  searchForBookmark,
  searchForTitles,
  searchForTag
}) => {
  const [searchText, setSearchText] = React.useState("");
  const [whereToSearch, setWhereToSearch] = React.useState("Bookmarks");

  useEffect(() => {
    loadBookmarks();
  }, [loadBookmarks]);

  return (
    <>
      <Box>
        <TextField
          fullWidth
          label="Search for bookmarks"
          onChange={e => {
            setSearchText(e.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box>
        <FormControl>
          <RadioGroup
            row
            defaultValue={whereToSearch}
            onChange={e => {
              setWhereToSearch(e.target.value);
            }}
          >
            <FormControlLabel
              value="Bookmarks"
              control={<Radio />}
              label="Bookmarks"
            />
            <FormControlLabel
              value="Titles"
              control={<Radio />}
              label="Titles"
            />
            <FormControlLabel value="Tags" control={<Radio />} label="Tags" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button
        variant="outlined"
        onClick={() => {
          if (whereToSearch === "Bookmarks") {
            searchForBookmark(bookmarks, searchText);
          }
          if (whereToSearch === "Titles") {
            searchForTitles(bookmarks, searchText);
          }
          if (whereToSearch === "Tags") {
            searchForTag(bookmarks, tagMap, searchText);
          }
        }}
      >
        検索
      </Button>
    </>
  );
};

SearchScreen.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  tagMap: PropTypes.shape().isRequired,
  loadBookmarks: PropTypes.func.isRequired,
  searchForBookmark: PropTypes.func.isRequired,
  searchForTitles: PropTypes.func.isRequired,
  searchForTag: PropTypes.func.isRequired
};

export default SearchScreen;
