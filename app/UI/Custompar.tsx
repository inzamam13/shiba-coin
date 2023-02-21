import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Theme } from "../theme";

const Custompar = ({ route, navigation }: any) => {
  console.log(route?.params);
  const { par, text, color, text1,type } = route?.params.text;
  console.log(par, "dd");
  return (
    <>
      <Header showSearch={true} title={text1 || text} />
      <ScrollView
        contentContainerStyle={{
          //   justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          marginTop: 10,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Choice", { type })}
            style={{
              height: 50,
              borderRadius: 20,
              backgroundColor: color,
              width: Dimensions.get("window").width / 1.1,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "900",
                textShadowColor: Theme.colors.gray,
              }}
            >
              Quizez
            </Text>
            <View>
              <Ionicons
                name="arrow-back"
                size={30}
                color="#000"
                style={{ transform: [{ rotate: "180deg" }], left: 18 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: color,
            borderRadius: 10,
            paddingHorizontal: 10,
            top: 20,
            zIndex: 2,
            padding: 10,
          }}
        >
          <Text>{text}</Text>
        </View>
        <View
          style={{
            backgroundColor: Theme.colors.sec,
            width: Dimensions.get("window").width / 1.1,
            borderRadius: 10,
            padding: 10,
            marginBottom: 120,
            marginTop: 10
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontWeight: '400',
              textAlign: "left",
            }}
          >
            {par}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Custompar;

const styles = StyleSheet.create({});
