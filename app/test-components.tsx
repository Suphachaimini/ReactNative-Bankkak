import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from 'react-native';


export default function TestComponent() {
    return (
        <ScrollView style={{ margin: 20 }} >
            <TextInput
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={30}
                multiline={false}
                placeholder="Please enter your email"
                returnKeyType="next"
                onChangeText={(text) => { }}
                defaultValue="Default text"
            />
            <Button
                title="Press me"
                onPress={() => Alert.alert("Simple Button pressed")}
                color="#665544"
            />
            <Text> Hello World </Text>

            <Image source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} style={{ width: 50, height: 50 }} />

            <View style={{ flexDirection: 'column' }}>
                {/* Fixed Size */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
                    <Image style={{ width: 100, height: 50 }} source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} />
                    <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} />
                    <Image style={{ width: 100, height: 100, borderRadius: 100 / 2 }} source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} />
                </View>
            </View>

            <View style={{ flexDirection: 'column' }}>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 3 / 2 }} source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 4 }} source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, backgroundColor: 'gray' }}>
                    <Image style={{ flex: 1, resizeMode: 'contain', aspectRatio: 16 / 4 }} source={{ uri: 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/cbc1/live/74fe8e20-5170-11ed-ac87-630245663c6a.png.webp' }} />
                </View>

            </View>

            <FontAwesome name="heart" size={32} color="orange" />

            <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: "white" }}>หัวใจ</Text>
            </View>


        </ScrollView>
    );
}
