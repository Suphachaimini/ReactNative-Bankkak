import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MyMapView(props: any) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  const [users, setUsers] = useState<any[]>([]);

  const loadLocations = async () => {
    let url_endpoint = "https://ckartisan.com/api/location";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      setUsers(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadLocations();
  }, []);

  if (props.location) {
    return (
      <MapView
        style={{ width: width, height: height }}
        initialRegion={{
          latitude: props.location.coords.latitude,
          longitude: props.location.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(event) => {
          if (event.nativeEvent.coordinate) {
            let new_location = {
              coords: event.nativeEvent.coordinate,
              mocked: false,
              timestamp: event.nativeEvent.coordinate.timestamp,
            };
            props.setLocation(new_location);
          }
        }}
      >
        {users.map((item) => (
          <Marker
            key={item.id}
            coordinate={{
              latitude: Number(item.latitude),
              longitude: Number(item.longitude),
            }}
            title={item.user_id} 
          >
            <FontAwesome name="user" size={22} color="tomato" />
          </Marker>
        ))}
      </MapView>
    );
  } else {
    return <MapView style={{ width: width, height: height }} />;
  }
}
