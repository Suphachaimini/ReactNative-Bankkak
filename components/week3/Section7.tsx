import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
  return (
    <View style={{ padding: 20, borderBottomWidth: 1, borderColor: '#ddd' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Room Type</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image 
            style={{ width: 80, height: 100, borderRadius: 10 }} 
            source={require('@/assets/week3/room-8.jpg')} 
        />
        <View style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Standard Twin Room</Text>
            <Text style={{ fontSize: 20, color: 'orange', marginTop: 5 }}>$399.99</Text>
            <Text style={{ color: 'teal', marginTop: 5 }}>Hurry Up! This is your last room!</Text>
        </View>
      </View>
    </View>
  );
}