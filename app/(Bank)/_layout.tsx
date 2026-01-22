import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Charmander"
        options={{
          tabBarLabel: "Charmander",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="fire" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Pikachu"
        options={{
          tabBarLabel: "Pikachu",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bolt" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Ivysour"
        options={{
          tabBarLabel: "Ivysour",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="leaf" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}