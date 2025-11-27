import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Section3() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.scoreText}>9.5</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.statusText}>Excellent</Text>
        <Text style={styles.reviewCountText}>See 801 reviews</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1, 
    borderColor: "#ddd",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e65100",
    justifyContent: "center",
    alignItems: "center",
  },
  scoreText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  textContainer: {
    marginLeft: 15,
  },
  statusText: {
    fontSize: 20,
    color: "#e65100",
    fontWeight: "bold",
  },
  reviewCountText: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
  },
});