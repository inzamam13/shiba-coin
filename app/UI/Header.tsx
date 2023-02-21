import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Theme } from "../theme";
import Wrapper from "./Wrapper";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title?: string;
  hasBack?: Boolean;
  showSearch?: Boolean;
  leftIcon?: any;
}

const Header = ({ title, leftIcon, showSearch }: HeaderProps) => {
  const navigation: any = useNavigation();

  return (
    <Wrapper
      style={[
        styles.heading,
        { justifyContent: showSearch ? "space-between" : "center" },
      ]}
    >
      {showSearch ? (
        <TouchableOpacity
          style={styles.searchIcn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      ) : null}

      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <Text style={styles.txtStyle}>{title || "None"}</Text>
      </View>
      <View style={{ paddingHorizontal: showSearch ? 20 : null }}></View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  txtStyle: {
    color: "#000",
    // fontFamily: THEME.fonts.medium,
    fontSize: 20,
    alignSelf: "center",
    fontWeight: '600'
  },
  searchIcn: {
    width: 50,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  main: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  letIcWrap: {
    width: 40,
  },
  heading: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: Theme.colors.sec,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Header;
