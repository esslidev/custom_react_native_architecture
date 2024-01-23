import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Route } from "../../constants/routes";
import { useNavigation } from "../../utils/navigationHandler/NavigationContext";

interface HomeDumbProps {
  data: any;
  fetchData: () => void;
}

const HomeDumb: React.FC<HomeDumbProps> = ({ data, fetchData }) => {
  const { push, replace, goBack } = useNavigation();

  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // routerReplace(Routes.Intro);
  }, []); // The empty array [] means this effect runs once after initial render

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The data is: {data}</Text>
      <Button
        title="push"
        onPress={() => {
          push(Route.Intro);
        }}></Button>
      <Button
        title="replace"
        onPress={() => {
          replace(Route.Intro);
        }}></Button>
      <Button
        title="go Back"
        onPress={() => {
          goBack();
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    color: "blue",
  },
});

export default HomeDumb;
