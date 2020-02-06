import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FindInPage from "@material-ui/icons/FindInPage";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const SearchScreen = () => {
  return (
    <Paper>
      <Box>
        <FormControl variant="outlined">
          <InputLabel htmlFor="test">Search for bookmarks</InputLabel>
          <Input
            type="search"
            startAdornment={
              <InputAdornment position="start">
                <FindInPage />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Button variant="outlined">検索</Button>
    </Paper>
  );
};

export default SearchScreen;
