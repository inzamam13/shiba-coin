import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
// import {colors} from '../../themes/Colors';
import { units } from "../utils/helpers";

import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../theme";
const CustomInput = ({
  value,
  placeHolder,
  onChangeText,
  secure,
  type,
  style,
  error,
  disable,
  INPUT,
  border,
}) => {
  const [showPassword, setShowPassword] = useState(secure);

  const handleIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View
      style={[styles.container, style, { borderColor: border || "#05386B" }]}
    >
      <TextInput
        editable={disable}
        placeholder={placeHolder}
        style={[styles.input, INPUT]}
        value={value}
        // onChange={onChangeText}
        onChangeText={onChangeText}
        keyboardType={type}
        secureTextEntry={showPassword}
        autoCapitalize="none"
        returnKeyType="next"
        error={error}
        // placeholderTextColor={"#fff"}
      />
      {secure && (
        <TouchableOpacity onPress={handleIcon}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={25}
            color={Theme.colors.gray}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,

    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: Theme.colors.gray,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: "row",
    alignItems: "center",
    width: units.width / 1.2,
    height: 20,
    // marginBottom: 20,
  },
  input: {
    // paddingVertical: units.height / 34,
    fontSize: 17,
    flex: 1,
    color: "#05386B",
  },
  icon: {
    marginRight: units.width / 16,
  },
});
