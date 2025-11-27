import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section5() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome name="wifi" size={24} color="#78A3D4" />
        <Text style={styles.text}>Wifi</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name="coffee" size={24} color="#78A3D4" />
        <Text style={styles.text}>Coffee</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name="bath" size={24} color="#78A3D4" />
        <Text style={styles.text}>Bath</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name="car" size={24} color="#78A3D4" />
        <Text style={styles.text}>Car</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesome name="paw" size={24} color="#78A3D4" />
        <Text style={styles.text}>Paw</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});