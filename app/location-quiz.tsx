import MyMapView from "@/components/week10/MyMapView";
import { getLocation } from "@/utils/gps";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

export default function LocationQuiz() {
  const [location, setLocation] = useState<any>(null);

  const onLoad = async () => {
    let loc = await getLocation();
    if (loc) {
      setLocation(loc);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MyMapView
        location={location}
        setLocation={setLocation}
      />
    </View>
  );
}
