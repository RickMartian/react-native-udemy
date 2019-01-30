import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: "#6ca2f7",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    fontSize: 50,
    color: "white"
  }
});

export default Header;
