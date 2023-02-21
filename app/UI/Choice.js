import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { hp, wp } from "../utils/helpers";

import Advance from '../utils/Advance.json'
import Basic from '../utils/Basic.json'
import { LinearGradient } from "expo-linear-gradient";
import Minning from '../utils/Minning.json'
import NavigationNames from "../Navigation/NavigationNames";
import Quiz from "../utils/Quiz.json";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { Theme } from "../theme";

const Choice = ({ route, navigation }) => {
  const [Number, setNumber] = useState(0);
  const [Scroe, setScore] = useState({
    SC: 0,
    Correct: null,
  });
  console.log(route.params.type, "d");

  const type = () => {
    switch (route.params.type) {
      case "shiba":
        return Quiz;
      case "basic":
        return Basic;
      case "advance":
        return Advance;
      case "minning":
        return Minning;
      default:
        return Quiz;
    }
  };

  const increment = () => {
    let LENGTH = type().questions.length;
    if (Number === type().questions.length - 1) {
      console.log(Number, "dd");
      setNumber(0);
      navigation.goBack();
    } else {
      setNumber(Number + 1);
      console.log(Number, "rrr");
    }
  };
  const Answer = (Val, index) => {
    console.log(Val, index, Quiz.questions[Number].correctIndex, "dddd");
    if (index === Quiz.questions[Number].correctIndex) {
      setScore({ ...Scroe, SC: Scroe.SC + 1 });
    }
  };

  return (
    <>
      <LinearGradient
        colors={["rgba(22, 108, 238, 1)", "rgba(150,66,210,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: Dimensions.get("window").width / 1.1,
            backgroundColor: Theme.colors.primary,
            height: hp(70),
            borderRadius: 10,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text>
              {Number || 0}/{type().questions.length - 1}
            </Text>
            <Text>Score:{Scroe.SC} </Text>
          </View>
          <Text
            style={{
              fontSize: RF(15),
              fontWeight: "600",
              // alignSelf: "center",
            }}
          >
            {type().questions[Number].question}
          </Text>
          <View>
            {type().questions[Number].answers.map((item, index) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => Answer(item, index)}
                    style={{
                      width: Dimensions.get("window").width / 1.18,
                      // height: hp(4),
                      padding: 20,
                      marginVertical: 10,
                      borderRadius: 10,
                      borderColor: Theme.colors.black,
                      backgroundColor: Theme.colors.white,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: RF(15),
                        fontWeight: "600",
                        alignSelf: "center",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                </>
              );
            })}
          </View>

          <TouchableOpacity
            onPress={() => increment()}
            style={{
              width: wp(50),
              height: 40,
              backgroundColor: Theme.colors.yellow,
              borderRadius: 10,
              alignSelf: "flex-end",
              marginBottom: hp(2),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: RF(20), fontWeight: "600" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default Choice;

const styles = StyleSheet.create({});
