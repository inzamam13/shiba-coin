import { API_URL, ENDPOINTS } from "../utils/helpers";
import {
  Dimensions,
  Image,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";

import CustomInput from "../UI/Custominput";
import DropDownPicker from "react-native-dropdown-picker";
import Header from "../UI/Header";
import { LinearGradient } from "expo-linear-gradient";
import NavigationNames from "../Navigation/NavigationNames";
import { SOL } from "../assets";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from "../theme";
import axios from "axios";
import { data } from "../utils/Data";
import { getLIST } from "../services/ApiCalling";

const Home = ({ navigation }: any) => {
  LogBox.ignoreAllLogs()
  const [HASH, setHash] = useState(null);
  const [CONS, setCONSUMP] = useState(null);
  const [POWER, setPOWER] = useState(null);
  const [Dif, setDIF] = useState(null);
  const [POOL, setPOOL] = useState(null);
  const [live, setTotal] = useState(null);

  const getAllCoin = async () => {
    const url =
      "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd";

    try {
      const response = await axios.get(url);
      console.log(response.data.litecoin);
      const Val = Object.values(response.data.litecoin);
      console.log(Val[0], "val");
      // Object.keys(response.data.litecoin)
      // if (response) {
      //   return Val[0] * Values;
      // }
      CALULATION(Val[0]);
    } catch (e) {
      console.log(e, "dd");
    }
  };
  const CALULATION = async (bal) => {
    // getAllCoin();
    console.log(bal, HASH, CONS, POWER, Dif, POOL, live, "getValue");
    const Profit =
      ((HASH * 12.5) / ((Dif * 2) ^ 32)) *
      (86400 / (1 + POOL)) *
      (bal - (CONS * POWER) / 1000);
    console.log(Profit, "PRRR");
    setTotal(Profit);
  };
  const CLEAR = () => {
    console.log("djd");
    setCONSUMP(0), setDIF(0), setTotal(null), setHash(null);
    setPOWER(0);
    setPOOL(0);
  };

  return (
    <>
      <Header title="Intro To Shiba Coin" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Theme.colors.sec,
        }}
      >
        {/* <Image source={SOL} resizeMode={"contain"} /> */}
        {data.map((item) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(NavigationNames.CustomPar, {
                    text: { ...item, type: "shiba" },
                  })
                }
                style={{
                  backgroundColor: item.color,
                  height: 120,
                  width: Dimensions.get("window").width / 1.1,
                  marginVertical: 10,
                  borderRadius: 20,
                  padding: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    // justifyContent: "center",
                    alignItems: "center",
                    width: Dimensions.get("window").width / 1.7,
                    // backgroundColor: "#000",
                    // height: 120,
                  }}
                >
                  <Image
                    source={SOL}
                    resizeMode={"contain"}
                    style={{ width: 80, height: 80 }}
                  />
                  <Text
                    style={{
                      color: Theme.colors.black,
                      fontWeight: "600",
                      fontSize: 17,
                    }}
                  >
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 60,
    marginLeft: 0,
    marginRight: 2,
  },
  INPUT: {
    marginLeft: 0,
    marginRight: 2,
    // paddingHorizontal: -10,
    // paddingVertical: units.height / 34,
    fontSize: 17,

    // marginTop: 12,
    flex: 1,
    color: "#fff",
  },
});
