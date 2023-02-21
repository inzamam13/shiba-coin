import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ParamListBase, RouteProp } from "@react-navigation/native";

import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import React from "react";
import { StackNavigationOptions } from "@react-navigation/stack";
import { Theme } from "../theme";

const getTabTitle = (routeName: string): string => {
  if (routeName === "Home") {
    return "Intro to Shiba Coin";
  } else if (routeName === "Dashboard") {
    return "Earning";
  } else if (routeName === "Annual") {
    return "Basic Concepts";
  } else if (routeName === "Convertor") {
    return "Advance Concepts";
  } else if (routeName === "Glossary") {
    return "Minning Shiba Coin";
  } else if (routeName === "Facts") {
    return "Conclusion";
  }
  return "";
};
const getTitle = (routeName: string): string => {
  if (routeName === "Home") {
    return "Minig";
  } else if (routeName === "Dashboard") {
    return "Money";
  } else if (routeName === "Annual") {
    return "Returns";
  } else if (routeName === "Convertor") {
    return "Convertor";
  } else if (routeName === "Glossary") {
    return "Glossary";
  } else if (routeName === "Facts") {
    return "Facts";
  }
  return "";
};

export const tabScreenOptions: (props: {
  route: RouteProp<ParamListBase, keyof ParamListBase>;
  navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
  title: getTabTitle(route.name),
  tabBarLabel: getTitle(route.name),
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = "";
    switch (route.name) {
      case "Dashboard":
        iconName = "md-person";
        break;
      case "Home":
        iconName = "calculator-sharp";
        break;
      case "Annual":
        iconName = "ios-search";
        break;
      case "Convertor":
        iconName = "ios";
        break;
      case "Glossary":
        iconName = "flower-outline";
        break;
      case "Facts":
        iconName = "ios-menu";
        break;
    }
    if (iconName === "ios-menu")
      return <FontAwesome name="book" size={28} color={color} />;
    else if (iconName === "flower-outline")
      return <Entypo name="align-vertical-middle" size={24} color={color} />;
    else if (iconName === "ios")
      return (
        <MaterialIcons name="published-with-changes" size={28} color={color} />
      );
    else if (iconName === "ios-search")
      return <FontAwesome name="book" size={28} color={color} />;
    else if (iconName === "calculator-sharp")
      return <FontAwesome5 name="book-open" size={28} color={color} />;
    else {
      return <Ionicons name={iconName} size={28} color={color} />;
    }
  },

  headerStyle: { backgroundColor: Theme.colors.primary },
  headerTitleStyle: {
    color: Theme.colors.sec,
  },
  tabBarActiveTintColor: Theme.colors.white,
  tabBarInactiveTintColor: Theme.colors.gray,

  tabBarStyle: {
    // backgroundColor: "#222222",
    borderTopColor: "#05386B",
    height: 80,
    width: Dimensions.get("window").width / 1.1,

    borderRadius: 50,
    marginBottom: 20,
    justifyContent: "center",

    alignSelf: "center",
    position: "absolute",
    marginTop: 5,
    left: Dimensions.get("window").width / 22,
    padding: 20,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  tabBarShowLabel: false,

  // headerShadowVisible: false,
});

export const stackScreenOptions: StackNavigationOptions = {
  headerTitleAlign: "center",
  headerBackTitleVisible: false,
  headerTintColor: "#05386B",
};
