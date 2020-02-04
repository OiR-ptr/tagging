import { connect } from "react-redux";
import { push } from "connected-react-router";
import ApplicationNav from "../components/ApplicationNav";
import { NavigationEvent } from "../actions/NavigationAction";

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    changeNavigation(to) {
      dispatch(NavigationEvent(to));
      dispatch(push("/about"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationNav);
