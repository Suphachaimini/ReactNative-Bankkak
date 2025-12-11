import React from "react";
import { Image, View, } from "react-native";

export default function Cover() {
    return (        
        <View style={{ flexDirection: "row" }}>
            <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }} source={require("@/assets/week3/room-6.jpg")} />
        </View>
    );
}