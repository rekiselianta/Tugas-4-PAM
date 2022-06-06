import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';

function App(){
  const [subuh,setSubuh] = useState(false)
  const [dzuhur,setDzuhur] = useState(false)
  const [ashar,setAshar] = useState(false)
  const [maghrib,setMaghrib] = useState(false)
  const [isya,setIsya] = useState(false)

  return(
    <>
      <Text style={styles.header}>Tugas 4</Text>
      <Text style={styles.headline}>Checkbox Sholat</Text>
      <View style = {styles.container}>
        <View style = {styles.section}>
          <Checkbox 
            style = {styles.checkbox}
            value = {subuh}
            onValueChange={setSubuh}
            color = {subuh ? '#f9d1d1' : undefined}
          />
          <Text style = {styles.paragraph}>Sudah Sholat Subuh?</Text>
        </View>
        <View style = {styles.section}>
          <Checkbox 
            style = {styles.checkbox}
            value = {dzuhur}
            onValueChange={setDzuhur}
            color = {dzuhur ? '#f9d1d1' : undefined}
          />
          <Text style = {styles.paragraph}>Sudah Sholat Dzuhur?</Text>
        </View>
        <View style = {styles.section}>
          <Checkbox 
            style = {styles.checkbox}
            value = {ashar}
            onValueChange={setAshar}
            color = {ashar ? '#f9d1d1' : undefined}
          />
          <Text style = {styles.paragraph}>Sudah Sholat Ashar?</Text>
        </View>
        <View style = {styles.section}>
          <Checkbox 
            style = {styles.checkbox}
            value = {maghrib}
            onValueChange={setMaghrib}
            color = {maghrib ? '#f9d1d1' : undefined}
          />
          <Text style = {styles.paragraph}>Sudah Sholat Maghrib?</Text>
        </View>
        <View style = {styles.section}>
          <Checkbox 
            style = {styles.checkbox}
            value = {isya}
            onValueChange={setIsya}
            color = {isya ? '#f9d1d1' : undefined}
          />
          <Text style = {styles.paragraph}>Sudah Sholat Isya?</Text>
        </View>
      </View>
      <Text style={styles.copyright}>Reki Selianta - 14116008</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#000',
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 5,
    textAlign: 'center',
    marginTop: 20,    
  },
  headline: {
    color: '#000',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  copyright: {
    color: '#000',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default App;