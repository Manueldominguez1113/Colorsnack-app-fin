import React from "react";
import { View, Text, ScrollView, Image, TextInput } from "react-native";

export default function App() {
  const cat = "hello i am maru";
    return (
<ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more {cat}</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

