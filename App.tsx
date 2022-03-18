import { useState } from "react";
import { Button, View } from "react-native";

const TrafficColor: string[] = ["red", "yellow", "green"];

export default function App() {
  const [color, setColor] = useState("red");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {TrafficColor.map((color) => (
        <Button
          key={color}
          title={color}
          onPress={() => {
            setColor(color);
          }}
        />
      ))}
    </View>
  );
}
