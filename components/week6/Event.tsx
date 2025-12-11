import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

type EventItem = {
    id: string;
    title: string;
    uri: string;
    month: string;
    date: string;
    datetime: string;
    place: string;
}

export default function Event(props: any) {
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Up Coming Events</Text>
      <Text style={{ fontSize: 12, color: 'gray', marginBottom: 10 }}>What's the Worst That Could Happen</Text>

      <FlatList
        data={events}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ marginRight: 15, width: 250, borderRadius: 10, borderWidth: 1, borderColor: '#ddd', overflow: 'hidden' }}>
            <Image source={{ uri: item.uri }} style={{ width: '100%', height: 130 }} />
            <View style={{ flexDirection: 'row', padding: 10, height: 80, alignItems: 'center', backgroundColor: '#fff' }}>
              <View style={{ alignItems: 'center', marginRight: 15 }}>
                <Text style={{ fontSize: 12, color: 'red' }}>{item.month}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.date}</Text>
              </View>
              <View>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>{item.datetime}</Text>
                <Text style={{ fontSize: 10, color: 'gray' }}>{item.place}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}