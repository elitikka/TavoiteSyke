import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")
  const validAge: number = !isNaN(Number(age)) === true ? Number(age):0
  const lower: number = (220-validAge)*0.65
  const upper: number = (220-validAge)*0.85

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Limits Calculator</Text>
      <Text style={styles.text}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        placeholder='set age'
        keyboardType='number-pad'
        value={age}
        onChangeText={ setAge}
        />
        <Text style={styles.text}>Lower limit: {lower.toFixed(2)} bpm</Text>
        <Text style={styles.text}>Upper limit: {upper.toFixed(2)} bpm</Text>
    </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 16
  },
  text: {
    marginVertical: 2
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 5,
    marginBottom: 16,
    width: "30%"
  }
});
