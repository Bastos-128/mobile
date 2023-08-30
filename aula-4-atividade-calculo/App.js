import react, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';

export default function App() {
  function mais(){
    const soma = parseFloat(numer1) + parseFloat(numer2)
    alert ('O resutado é :'+soma);
  }
  function menos(){
    const diminui = parseFloat(numer1) - parseFloat(numer2)
    alert ('O resutado é :'+diminui);
  }
  function por(){
    const barra = parseFloat(numer1) / parseFloat(numer2)
    alert ('O resutado é :'+barra);
  }
  function vezes(){
    const xxx = parseFloat(numer1) * parseFloat(numer2)
    alert ('O resutado é :'+xxx);
  }
  const [numer1, setnumer1] = useState('');
  const [numer2, setnumer2] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Calculadora</Text>
      <View style={styles.view}>
        <TextInput
          style={styles.inn}
          placeholder="digite primeiro item"
          keyboardType="numeric"
          onChangeText={(numer1) => setnumer1(numer1)}
        />
        <TextInput
          style={styles.inn}
          placeholder="digite segundo item"
          keyboardType="numeric"
          onChangeText={(numer2) => setnumer2(numer2)}
        />
        <Text style={styles.paragraph}>Operações</Text>
        <TouchableOpacity style={styles.btn} onPress={mais}>
          <Text style={styles.textobtn}>Adição</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}onPress={menos}>
          <Text style={styles.textobtn}>Subtração</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={por}>
          <Text style={styles.textobtn}>Divisão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={vezes}>
          <Text style={styles.textobtn}>Multiplicação</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#9cd0f1',
    padding: 8,
  },
  paragraph: {
    margin: 15,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'samsung-sans',
  },
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#9aa0f1',
    padding: 8,
    borderRadius: 10,
  },
  inn: {
    fontSize: 20,
    padding: 20,
    backgroundColor: '#90c0f1',
    borderRadius: 10,
    margin: 15,
    textAlign: 'center',
    fontFamily: 'samsung-sams',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#ffd657',
    padding: 10,
    borderRadius: 10,
    margin: 15,
  },
  textobtn: {
    fontSize: 20,
    color: '#0f0f0f',
    fontFamily:'samsung-sams'
  },
});
