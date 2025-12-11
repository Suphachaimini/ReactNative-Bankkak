import React, { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

export default function Event(props: any) {
  const [events] = useState([
    { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg" , "month" : "DEC", "date" : "30", "datetime" : "Thu, DEC 30, 09.00 am" , "place" : "London" },
    { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg" , "month" : "DEC", "date" : "31", "datetime" : "Thu, DEC 30, 09.00 am", "place" : "Paris"},
    { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg" , "month" : "JAN", "date" : "01", "datetime" : "Thu, JAN 01, 09.00 am", "place" : "Canada"},
    { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg" , "month" : "JAN", "date" : "11", "datetime" : "Thu, JAN 11, 09.00 am", "place" : "USA"},
    { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg" , "month" : "JAN", "date" : "21", "datetime" : "Thu, JAN 21, 09.00 am", "place" : "Thailand"}
  ]);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Up Coming Events</Text>
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