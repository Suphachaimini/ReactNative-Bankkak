import Greeting from '@/components/Greeting';
import { View } from 'react-native';
export default function TestGreeting(){
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
}
