import { StyleSheet } from "react-native";
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
    paddingTop: Constants.statusBarHeight + 140,
  },

  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp('75%'),
  },

  title: {
    fontSize: 24,
    textAlign: "left",
    color: "#fff",
    marginRight: 60,
    fontWeight: "bold",
    flexDirection: "row",
  },

  createAccount: {
    color: "#6ADF22",
    marginLeft: 60,
    fontSize: 16,
  },

  content: {
    alignItems: "center",
    textAlign: "left",
    marginTop: wp('10%'),
  },

  input: {
    marginBottom: 4,
    marginTop: 10,
    padding: 10,
    width: wp('80%'),
    height: hp('6.7%'),
    backgroundColor: "#fff",
    fontSize: 14,
    borderRadius: 14,
    paddingLeft: wp('4%'),
  },

  button: {
    width: wp('80%'),
    height: hp('6.7%'),
    backgroundColor: "#6ADF22",
    marginTop: 10,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
  },

  textPasswordRecovery: {
    marginTop: 10,
    color: "#fff",
    marginRight: 150,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
