import React from 'react';
import { View } from 'react-native';

export default function Ex07() {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row-reverse',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            }}
        >
            <View style={{ backgroundColor: '#9013FE', width: 80, height: 80 }} />
            <View style={{ backgroundColor: '#4A90E2', width: 80, height: 80 }} />
            <View style={{ backgroundColor: '#50E3C2', width: 80, height: 80 }} />


        </View>
    );
}
