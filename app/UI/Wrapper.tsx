//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper = ({ children, style }: any) => {
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
