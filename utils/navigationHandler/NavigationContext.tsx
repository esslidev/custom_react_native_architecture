import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { BackHandler } from "react-native";
import { Route } from "../../constants/routes";

type NavigationContextType = {
  navigate: (routeName: Route) => void;
  push: (routeName: Route) => void;
  replace: (routeName: Route) => void;
  goBack: () => void;
  stack: string[];
};

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }

  return context;
};

type NavigationProviderProps = {
  children: ReactNode;
  initialRoute: Route;
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
  initialRoute,
}) => {
  const [stack, setStack] = useState<string[]>([initialRoute]);

  useEffect(() => {
    // Add a back button event listener
    const backAction = () => {
      // Handle the back button press here
      // For example, you can navigate to a previous screen or show an alert
      // Return true to prevent the default behavior (e.g., exiting the app)
      // Return false to allow the default behavior
      // You can customize this logic as needed
      // For this example, we'll just show an alert and allow the default behavior
      alert("Back button pressed!");
      return true;
    };

    // Subscribe to the hardware back button event
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    // Clean up the event listener when the component unmounts
    return () => {
      backHandler.remove();
    };
  }, []);

  useEffect(() => {
    console.log(`Stacked routes: ${stack}`);
  }, [stack]);

  if (!children) {
    throw new Error("NavigationProvider must have at least one child");
  }

  const navigate = (routeName: Route) => {
    // Implement your custom navigation logic here
    // For simplicity, we'll just log the navigation action
    console.log(`Navigating to ${Route}`);
  };

  const push = (routeName: Route) => {
    // Push a new route onto the stack
    setStack([...stack, routeName]);
  };

  const replace = (routeName: Route) => {
    // Replace the current route with a new one
    setStack([routeName]);
  };

  const goBack = () => {
    // Go back to the previous route
    if (stack.length > 1) {
      const newStack = stack.slice(0, -1);
      setStack(newStack);
    }
  };

  return (
    <NavigationContext.Provider
      value={{ navigate, push, replace, goBack, stack }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
