import { StyleSheet, Dimensions } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },

  scrollView: {
    marginHorizontal: 0,
  },

  details:{
    marginHorizontal: 30,
    paddingBottom: 20,
  },

  topBar: {
    backgroundColor: "#fff",
    width: wp("200%"),
    height: hp("10%"),
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 30,
    shadowRadius: 50,

    elevation: 30,
  },

  topText: {
    marginTop: 30,
    fontSize: 25,
    color: "#6ADF22",
    textAlign: "center",
    fontWeight: "bold"    
  },

  title: {
    fontSize: 30,
    color: "#000",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 26,
    color: "#000",
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 20,
  },
  
  imgLeao:{
    marginBottom: 20,
    paddingTop: 20,
    width: wp("85%"),
  },

  imgNatal:{
    paddingTop: 20,
    marginBottom: 20,
    width: wp("85%"),
  },
  
  description: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#000",
    textAlign: "left",
    paddingBottom: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',

  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    // fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },
});