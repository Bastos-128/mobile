import {View,Text,StyleSheet} from "react-native";

export default function App ()
{
return(
        <View style={estilo.container}>
        <Text style={estilo.titulo}>
          Ola Mundo
        </Text>
        <Text style={estilo.subtitulo}>
          etec Guarulhos
        </Text>
        </View>
   )
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1238d5",
        justifyContent:'center',
        alignContent:'center'
    },
titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10
}
,subtitulo:{
    fontSize: 20

}
})
