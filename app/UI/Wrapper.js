import { StyleSheet, View } from "react-native";

//import liraries
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper = ({ children, style }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default Wrapper;
