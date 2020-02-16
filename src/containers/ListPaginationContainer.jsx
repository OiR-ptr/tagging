import { connect } from "react-redux";
import { setPageNumberEvent } from "../actions/BookmarkActions";
import ListPagination from "../components/ListPagination";

function mapStateToProps(state) {
  const {
    bookmark: { hitList, pageNum, contentsPerPage }
  } = state;

  return {
    pageNum,
    hitList,
    contentsPerPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPageNum(_, pageNum) {
      dispatch(setPageNumberEvent(pageNum));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPagination);
