import { StyleSheet, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { NavigationProvider } from "./utils/navigationHandler/NavigationContext";
import Router from "./utils/navigationHandler/Router";
import { Route } from "./constants/routes";
import BackgroundSmart from "./BackgroundContext/container/BackgroundSmart";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BackgroundSmart />
        <View style={styles.container}>
          <NavigationProvider initialRoute={Route.Intro}>
            <Router />
          </NavigationProvider>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
