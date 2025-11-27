import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Location</Text>
      <Text style={{ marginBottom: 15, color: '#444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
      <Image 
        source={require('@/assets/week3/map.jpg')} 
        style={{ width: '100%', height: 100, borderRadius: 10 }} 
        resizeMode="cover"
      />
    </View>
  );
}