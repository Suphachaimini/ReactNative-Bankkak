import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section2() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hilton San Francisco</Text>

      <View style={styles.ratingContainer}>
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star" size={20} color="orange" />
        <FontAwesome name="star-half" size={20} color="orange" />
      </View>

      <Text style={styles.description}>
        Facilities provided may range from a modest quality mattress in a small room to large suites
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -30,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 5, 
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 12,
    color: 'gray',
  },
});