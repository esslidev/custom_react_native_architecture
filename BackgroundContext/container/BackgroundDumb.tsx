import React, { useEffect } from "react";
import { StyleSheet, View, Animated, Dimensions, Easing } from "react-native";
import BackgroundStarsLayer1 from "../../components/vectors/BackgroundStarsLayer1";

import BackgroundStarsLayer2 from "../../components/vectors/BackgroundStarsLayer2";
import BackgroundStarsLayer3 from "../../components/vectors/BackgroundStarsLayer3";

interface BackgroundDumbProps {
  speed: number;
  direction: "top" | "bottom";
}

export const BackgroundDumb: React.FC<BackgroundDumbProps> = ({ speed, direction }) => {
  const { width: screenWidth } = Dimensions.get("window");
  const svgAspectRatio = 1139 / 3416; // Replace with your SVG's aspect ratio
  const svgHeight = screenWidth / svgAspectRatio;

  const layer1Position = new Animated.Value(0);
  const layer2Position = new Animated.Value(0);
  const layer3Position = new Animated.Value(0);

  const animationDuration1 = 12000; // Adjust the durations
  const animationDuration2 = 14000;
  const animationDuration3 = 16000;

  const animateLayer = (
    layerPosition: Animated.Value,
    duration: number,
    speed: number,
    direction: "top" | "bottom"
  ) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(layerPosition, {
          toValue: direction == "top" ? 1 : 0,
          duration: speed != 0 ? duration / speed : 0,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(layerPosition, {
          toValue: direction == "top" ? 0 : 1,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    console.log(direction);
    animateLayer(layer1Position, animationDuration1, speed, direction);
    animateLayer(layer2Position, animationDuration2, speed, direction);
    animateLayer(layer3Position, animationDuration3, speed, direction);
    console.log("🚀 ~ file: BackgroundDumb.tsx:31 ~ speed:", speed);
  }, [speed, direction]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.svgContainer,
          {
            transform: [
              { translateY: layer1Position.interpolate({ inputRange: [0, 1], outputRange: [0, -svgHeight] }) },
            ],
          },
        ]}>
        <BackgroundStarsLayer1 width={screenWidth} height={svgHeight} />
        <BackgroundStarsLayer1 width={screenWidth} height={svgHeight} />
      </Animated.View>
      <Animated.View
        style={[
          styles.svgContainer,
          {
            transform: [
              { translateY: layer2Position.interpolate({ inputRange: [0, 1], outputRange: [0, -svgHeight] }) },
            ],
          },
        ]}>
        <BackgroundStarsLayer2 width={screenWidth} height={svgHeight} />
        <BackgroundStarsLayer2 width={screenWidth} height={svgHeight} />
      </Animated.View>
      <Animated.View
        style={[
          styles.svgContainer,
          {
            transform: [
              { translateY: layer3Position.interpolate({ inputRange: [0, 1], outputRange: [0, -svgHeight] }) },
            ],
          },
        ]}>
        <BackgroundStarsLayer3 width={screenWidth} height={svgHeight} />
        <BackgroundStarsLayer3 width={screenWidth} height={svgHeight} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 100,
    backgroundColor: "#070714",
  },
  svgContainer: {
    position: "absolute",
    opacity: 0.6,
  },
  text: {
    color: "white",
  },
});
