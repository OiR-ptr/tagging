import { connect } from "react-redux";
import SearchResultScreen from "../components/SearchResultScreen";

function mapStateToProps(state) {
  return {
    hitList: state.bookmark.hitList
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultScreen);
