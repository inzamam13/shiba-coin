import { API_URL, ENDPOINTS } from "../utils/helpers";
import { BOK, BOOK, SOL } from "../assets";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MinningCoin, data } from "../utils/Data";
import React, { useState } from "react";

import CustomInput from "../UI/Custominput";
import DropDownPicker from "react-native-dropdown-picker";
import Header from "../UI/Header";
import { LinearGradient } from "expo-linear-gradient";
import NavigationNames from "../Navigation/NavigationNames";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from "../theme";
import axios from "axios";
import { getLIST } from "../services/ApiCalling";

const Glossary = ({ navigation }: any) => {
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
    console.log("djd", HASH);
  };

  return (
    <>
      {/* <Header title="Minning Shiba Coin" /> */}
      <ScrollView
        contentContainerStyle={{
          backgroundColor: Theme.colors.sec,
        }}
      >
        {/* <Image source={require('../assets/images/crp.jpg')} style={{width: '100%',alignSelf: 'center', height: '20%'}} resizeMode={"contain"} /> */}
        {MinningCoin.map((item) => {
          return (
            <>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(NavigationNames.CustomPar, {
                    text: item,
                  })
                }
                style={{
                  backgroundColor: item.color,
                  height: 120,
                  width: Dimensions.get("window").width / 1.1,
                  marginVertical: 10,
                  borderRadius: 20,
                  padding: 10,
                  alignSelf: 'center',
                  borderColor: item.color,
                  borderWidth: 2,
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
                    source={BOK}
                    resizeMode={"contain"}
                    style={{ width: 80, height: 80 }}
                  />
                  <Text
                    style={{
                      color: Theme.colors.black,
                      fontWeight: "600",
                      fontSize: 15,
                      marginLeft: 5
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

export default Glossary;

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

