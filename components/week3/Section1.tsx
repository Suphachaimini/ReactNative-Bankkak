import React from 'react';
import { Image, View } from 'react-native';

export default function Section1() {
  return (
    <View style={{ flex: 1 }}>
        <Image 
            source={require('@/assets/week3/room-1.jpg')}
            style={{ width: '100%', height: 200 }} 
            resizeMode="cover"
        />
    </View>
  );
}