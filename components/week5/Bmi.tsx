import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [description, setDescription] = useState('');

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        const w = parseFloat(weight);
        const h = parseFloat(height);
        
        let output = (w / (h / 100 * h / 100));
        setBmi(output.toFixed(2));


        let textResult = "";
        if (output < 18.5) {
            textResult = "Underweight";
        } else if (output >= 18.5 && output <= 24.9) {
            textResult = "Normal";
        } else if (output >= 25 && output <= 29.9) {
            textResult = "Overweight";
        } else if (output >= 30 && output <= 34.9) {
            textResult = "Obese";
        } else {
            textResult = "Extremely Obese";
        }
        
        setDescription(textResult);
    };

    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput placeholder="Input your weight"
                    keyboardType="numeric"
                    value={weight}
                    style={{ fontSize: 20 }}
                    onChangeText={(newWeight) => setWeight(newWeight)} />
            </View>

            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Height (cm.)</Text>
                <TextInput placeholder="Input your height"
                    keyboardType="numeric"
                    value={height}
                    style={{ fontSize: 20 }}
                    onChangeText={(newHeight) => setHeight(newHeight)} />
            </View>

            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>{bmi}</Text>
                </View>

                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>{description}</Text>
                </View>
            </View>

            {/* แถวที่ 4 */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}