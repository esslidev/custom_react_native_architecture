import { ScrollViewProps } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/rootReducers";
import { setDirectionRequest, setScrollPropsRequest, setSpeedRequest } from "../actions/backgroundActions";
import { BackgroundDumb } from "./BackgroundDumb";

// Import your Redux action creators and selectors here
// import { fetchDataAction } from '../../actions/homeActions';

// Replace this with your actual mapStateToProps function
const mapStateToProps = (state: RootState) => ({
  speed: state.background.speed,
  direction: state.background.direction,
});

// Replace this with your actual mapDispatchToProps function
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setSpeed: (speed: number) => dispatch(setSpeedRequest(speed)),
  //setScrollProps: (scrollProps: ScrollViewProps) => dispatch(setScrollPropsRequest(scrollProps)),
  //setDirection: (direction: "top" | "bottom") => dispatch(setDirectionRequest(direction)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundDumb);
