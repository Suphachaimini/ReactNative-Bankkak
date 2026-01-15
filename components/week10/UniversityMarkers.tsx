import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Marker } from "react-native-maps";

export default function UniversityMarkers(props:any) {

  return props.items.map((item:any) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={item.address}
    >
        <FontAwesome name="university" size={20} color="tomato" />
    </Marker>
  ));
}
