import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NavigationNames from "./app/Navigation/NavigationNames";
import HomePageTabNavigator from "./app/Navigation/Homepagetabnavigator";
import axios from "axios";
import { API_URL } from "./app/utils/helpers";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { persistor, store } from "./app/redux/store";

const RootStack = createStackNavigator();
axios.defaults.baseURL = API_URL;
axios.defaults.headers["Accept"] = "application/json";
axios.defaults.headers["Content-Type"] = "application/json";
export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer
            theme={{
              dark: false,
              colors: {
                background: "rgb(255, 255, 255)",
                border: "rgb(224, 224, 224)",
                card: "rgb(255, 255, 255)",
                primary: "rgb(0, 122, 255)",
                text: "rgb(28, 28, 30)",
              },
            }}
          >
            <RootStack.Navigator
              screenOptions={{ headerShown: false }}
              mode="modal"
            >
              <RootStack.Screen
                name={NavigationNames.RootScreen}
                component={HomePageTabNavigator}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
