import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

export default StyleSheet.create({
  smallButtonContainer: {
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 50,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 8,
  },
  largeButtonContainer: {
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: "center",
    width: 318,
    height: 50,
    marginTop: 30,
    marginHorizontal: '5%',
    borderRadius: 10

  },
});