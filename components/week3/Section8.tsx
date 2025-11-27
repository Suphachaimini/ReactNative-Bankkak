import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Section8() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.price}>$399.99</Text>
        <Text style={styles.label}>AVG/Night</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button title="Book Now" color="#f4511e" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  textContainer: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4511e',
    marginVertical: 2,
  },
  buttonContainer: {
    width: 150,
  },
});