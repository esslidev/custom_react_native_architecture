import React from "react";
import { Route, routeComponents } from "../../constants/routes";
import { useNavigation } from "./NavigationContext";

// Define a type guard to check if a string is a valid route name
function isRouteName(route: string): route is Route {
  return Object.values(Route).includes(route as Route);
}

const Router: React.FC = () => {
  const { stack } = useNavigation();
  const currentRoute = stack[stack.length - 1];

  // Check if currentRoute is a valid route name
  if (!isRouteName(currentRoute)) {
    // Handle invalid route, e.g., navigate to an error screen or the home screen
    return null;
  }

  const CurrentComponent = routeComponents[currentRoute];

  return <CurrentComponent />;
};

export default Router;
