import react, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet,View,TextInput,Button,TouchableOpacity, } from 'react-native';





export default function App() {
  function calculo(){
  const resutado = km / combustive
  alert('o consumo do seu carro é '+ resutado);
  }
  const [combustive,setcombustive] = useState('');
  const [km,setkm] = useState(''); 

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Consumo de Combustivel
      </Text>
      
      <TextInput
      style={styles.input}
      placeholder="Digite a Kilometragem percorida"
      keyboardType="numeric"
      placeholderTextColor="#fd5500"
      onChangeText={(km)=>setkm(km)}      
      />
      <Text> </Text>
      <TextInput
      style={styles.input}
      placeholder="Digete a quantidade de combustivel"
      keyboardType="numeric"  
      placeholderTextColor="#fd5500"
      onChangeText={(combustive)=>setcombustive(combustive)}   
      />
      <Text> </Text>
      <Text> </Text>
      <TouchableOpacity style={styles.btn} onPress={calculo}>
        <Text style={styles.textobtn}>Calcular o Consumo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    alignItems : 'center',
    backgroundColor: '#ffc512',
    padding:15,
    borderRadius:10,
  },
  textobtn:{
    fontSize:20,
    color: '#205890'
  },
  input:{
   fontSize:15,
   padding:20,
   backgroundColor: "#1f15bc",
   borderRadius:10,
   margin:15,
   color: '#66a', 
  }
});
