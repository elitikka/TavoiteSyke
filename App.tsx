import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("")

  // käytetty vähän samaa ideaa kuin web-ohjelmoinnin sovellusprojekti -kurssilla
  // oma huomio: ks. movie-web-app --> Frontend --> src --> pages --> Signup.jsx
  const ageRegex = /^\d+$/; 

  // laitetaan aluksi bpm arvot nolliin
  // arvot muuttuu kun käyttäjä syöttää iän
  let lower = 0
  let upper = 0

  if (ageRegex.test(age)) {
    const ageAsNumber = Number(age)

    /* En lukenut tehtävänantoa kunnolla. Luin, että jos antaa ei-numeerisen arvon, 
    niin ohjelma antaa nollat, MUTTA vahingossa ajattelin että myös jos käyttäjä antaa nollan,
    niin ohjelma antaa nollat. Sitten isoille ikänumeroille oli ongelma, että bpm arvot meni negatiiviseksi,
    niin laitoin siihenkin rajan 150, joskin alempikin raja olisi varmaan ollut ihan realistinen. 
    Päätin jättää nämä tähän nyt kuitenkin sen sijaan että olisin poistanut.
    */
    if (ageAsNumber>= 1 && ageAsNumber <= 150) {
      lower = (220-ageAsNumber)*0.65
      upper = (220-ageAsNumber)*0.85
    } else {
      lower = 0
      upper = 0
    }
  }

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
