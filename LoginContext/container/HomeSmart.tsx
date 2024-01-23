import { connect } from "react-redux";
import { getUserRequest } from "../actions/homeActions";
import HomeDumb from "./HomeDumb";

// Import your Redux action creators and selectors here
// import { fetchDataAction } from '../../actions/homeActions';

// Replace this with your actual mapStateToProps function
const mapStateToProps = (state: any) => ({
  data: "ali salem", // Replace with your data selector
});

// Replace this with your actual mapDispatchToProps function
const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => {
    dispatch(getUserRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDumb);
