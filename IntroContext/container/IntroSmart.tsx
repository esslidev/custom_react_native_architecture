import { connect } from "react-redux";
import { setSpeedRequest } from "../../BackgroundContext/actions/backgroundActions";
import IntroDumb from "./IntroDumb";

// Import your Redux action creators and selectors here
// import { fetchDataAction } from '../../actions/homeActions';

// Replace this with your actual mapStateToProps function
const mapStateToProps = (state: any) => ({});

// Replace this with your actual mapDispatchToProps function
const mapDispatchToProps = (dispatch: any) => ({
  setSpeed: (speed: number) => dispatch(setSpeedRequest(speed)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IntroDumb);
