import { Text, View } from "react-native";

export default function Greeting ({name}:any){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {name}!</Text>
      </View>
    );
}
