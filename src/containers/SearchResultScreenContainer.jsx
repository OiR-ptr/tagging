import { connect } from "react-redux";
import SearchResultScreen from "../components/SearchResultScreen";

function mapStateToProps(state) {
  const {
    bookmark: { hitList, pageNum, contentsPerPage }
  } = state;
  const filtered = hitList.slice(
    (pageNum - 1) * contentsPerPage,
    pageNum * contentsPerPage
  );

  return {
    pageContents: filtered,
    hitLength: hitList.length,
    searchWord: state.bookmark.searchWord
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultScreen);
