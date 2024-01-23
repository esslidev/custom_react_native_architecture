import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Route } from "../../constants/routes";
import { useNavigation } from "../../utils/navigationHandler/NavigationContext";

interface IntroDumbProps {
  setSpeed: (speed: number) => void;
}

const IntroDumb: React.FC<IntroDumbProps> = ({ setSpeed }) => {
  const { push, replace, goBack } = useNavigation();
  // Use the useEffect hook to fetch data when the component mounts
  useEffect(() => {}, []); // The empty array [] means this effect runs once after initial render

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The data is</Text>
      <Button
        title="add speed"
        onPress={() => {
          setSpeed(10);
        }}></Button>
      <Button
        title="DEFAULT"
        onPress={() => {
          setSpeed(1);
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
    position: "absolute",
    flex: 1,
    width: "100%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
});

export default IntroDumb;
