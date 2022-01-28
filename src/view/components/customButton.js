import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import StyleButton from "../styles/styleButton";
export default function CustomButton(props) {
  if (props.size==='small'){
    return (
        <View
          style={StyleButton.smallButtonContainer}
        >
          <Text style={{ color: "white", fontSize: 20}}>{props.name}</Text>
        </View>
    );
  }

  else if (props.size==='large'){
    return (
        <View
          style={StyleButton.largeButtonContainer}
        >
          <Text style={{ color: "white" }}>{props.name}</Text>
        </View>
    );
  }
  else {
    return (
        <View
          style={StyleButton.smallButtonContainer}
        >
          <Text style={{ color: "white"}}>{props.name}</Text>
        </View>
    );
  }
}