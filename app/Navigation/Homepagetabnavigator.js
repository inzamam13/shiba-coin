import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Annual from "../Screens/Annual";
import Choice from "../UI/Choice";
import Convertor from "../Screens/Convertor";
import Custompar from "../UI/Custompar";
import Dashboard from "../Screens/Dashboard";
import Facts from "../Screens/Facts";
import Glossary from "../Screens/Glossary";
import Home from "../Screens/Home";
import NavigationNames from "./NavigationNames";
import { Theme } from "../theme";
import api from "../services/api";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { setUser } from "../redux/reducers/userReducer";
import { tabScreenOptions } from "./NavigationHelper";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stacking = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={NavigationNames.HomeTab}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavigationNames.CustomPar}
        component={Custompar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavigationNames.Choice}
        component={Choice}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const Ann = () => {
  return (
    <Stack.Navigator initialRouteName="Annual">
      <Stack.Screen
        name={NavigationNames.Annual}
        component={Annual}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavigationNames.CustomPar}
        component={Custompar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavigationNames.Choice}
        component={Choice}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const HomePageTabNavigator = () => {
  const [userr, setuser] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.root.user);

  useEffect(async () => {
    await api(
      "https://cryp-coin-tracker-server.herokuapp.com/screenEnabling/get/by/appId/" +
      "shiba",
      null,
      "get"
    )
      .then((res) => {
        console.log(res.futureTrading, "ress");
        if (res) dispatch(setUser(res.futureTrading));
        setuser(res.futureTrading);
        // push = true;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {user ? (
        <Tab.Navigator
          initialRouteName="Dashboard"
          screenOptions={tabScreenOptions}
          tabBarOptions={{
            activeTintColor: Theme.colors.navbarActiveColor,
            inactiveTintColor: Theme.colors.navbarInactiveColor,
          }}
        >
          <Tab.Screen name={NavigationNames.Dashboard} component={Dashboard} />
          <Tab.Screen
            name={NavigationNames.HomeTab}
            component={stacking}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name={NavigationNames.Annual}
            component={Ann}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name={NavigationNames.SearchTab} component={Convertor} />
          <Tab.Screen name={NavigationNames.ProfileTab} component={Glossary} />
          <Tab.Screen name={NavigationNames.MenuTab} component={Facts} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={tabScreenOptions}
          tabBarOptions={{
            activeTintColor: Theme.colors.navbarActiveColor,
            inactiveTintColor: Theme.colors.navbarInactiveColor,
          }}
        >
          <Tab.Screen
            name={NavigationNames.HomeTab}
            component={stacking}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name={NavigationNames.Annual}
            component={Ann}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen name={NavigationNames.SearchTab} component={Convertor} />
          <Tab.Screen name={NavigationNames.ProfileTab} component={Glossary} />
          <Tab.Screen name={NavigationNames.MenuTab} component={Facts} />
        </Tab.Navigator>
      )}
    </>
  );
};

export default HomePageTabNavigator;
