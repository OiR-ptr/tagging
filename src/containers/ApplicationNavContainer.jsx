import { connect } from "react-redux";
import { push } from "connected-react-router";
import ApplicationNav from "../components/ApplicationNav";

function mapStateToProps(state) {
  return {
    nowAddress: state.router.location.pathname
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeNavigation(to) {
      dispatch(push(to));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationNav);
