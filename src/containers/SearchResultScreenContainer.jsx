import { connect } from "react-redux";
import SearchResultScreen from "../components/SearchResultScreen";
import { setContentTagsEvent } from "../actions/BookmarkActions";

function mapStateToProps(state) {
  const {
    bookmark: { hitList, pageNum, contentsPerPage, tagMap }
  } = state;
  const filtered = hitList.slice(
    (pageNum - 1) * contentsPerPage,
    pageNum * contentsPerPage
  );

  return {
    pageContents: filtered,
    hitLength: hitList.length,
    searchWord: state.bookmark.searchWord,
    tagMap
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateContentTag(id, tags) {
      dispatch(setContentTagsEvent(id, tags));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultScreen);
