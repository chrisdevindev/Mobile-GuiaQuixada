import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 1,
  },

  buttons: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    width: 80,
    height: 80,
    top: hp("82%"),
    backgroundColor: "#000",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  
  help: {
    left: wp("32%"),
    top: hp("74%"),
  },

  helpText: {
    fontSize: 9,
    color: "#6ADF22",
    textAlign: "center",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
});
