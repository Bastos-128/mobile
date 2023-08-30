import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { RampartOne_400Regular } from '@expo-google-fonts/rampart-one';
import { MrsSheppards_400Regular } from '@expo-google-fonts/mrs-sheppards';
import { PTSerifCaption_400Regular } from '@expo-google-fonts/pt-serif-caption';
import { KolkerBrush_400Regular } from '@expo-google-fonts/kolker-brush';
import { Yantramanav_500Medium } from '@expo-google-fonts/yantramanav';
import { Rosario_500Medium } from '@expo-google-fonts/rosario';
import { NotoSansSiddham_400Regular } from '@expo-google-fonts/noto-sans-siddham';
import { Catamaran_900Black } from '@expo-google-fonts/catamaran';
import { MeowScript_400Regular } from '@expo-google-fonts/meow-script';

export default function App() {
  let [fontsLoaded, fontsError] = useFonts({
    Inter_900Black,
    Catamaran_900Black,
    MeowScript_400Regular,
    NotoSansSiddham_400Regular,
    Rosario_500Medium,
    Yantramanav_500Medium,
    KolkerBrush_400Regular,
    PTSerifCaption_400Regular,
    RampartOne_400Regular,
    MrsSheppards_400Regular,
  });

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.caixa}>
          <Text style={styles.titulo}>
            "A tecnologia é apenas uma ferramenta. Em termos de motivar as
            crianças e os professores, o mais importante é o professor, a sua
            paixão e dedicação." - Bill Gates
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo2}>
            "A tecnologia não é nada. O que importa é que você tenha fé nas
            pessoas, que elas são basicamente boas e inteligentes, e se você
            lhes der ferramentas, elas farão coisas maravilhosas com elas." -
            Steve Jobs
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo3}>
            "A tecnologia move o mundo, mas só o coração o transforma." - Carlos
            Drummond de Andrade
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo4}>
            "A tecnologia pode ser uma grande aliada na educação, mas não
            substitui o papel do professor." - Paulo Freire
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo5}>
            "A tecnologia é a força vital da civilização moderna." - Arthur C.
            Clarke
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo6}>
            "A tecnologia não determina a sociedade: ela apoia as necessidades
            sociais das gerações humanas." - Manuel Castells
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo7}>
            "A tecnologia é um amigo que nos faz perguntas." - Albert Einstein
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo8}>
            "A tecnologia é uma palavra que descreve algo que não funciona
            ainda." - Douglas Adams
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo9}>
            "A tecnologia é como um peixe: quanto mais tempo fica no balcão,
            menos fresco fica." - Andrew Heller
          </Text>
        </View>
        <Text> </Text>
        <View style={styles.caixa}>
          <Text style={styles.titulo10}>
            "A tecnologia é a resposta errada para a pergunta errada." - Ursula
            K. Le Guin
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  titulo: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'Inter_900Black',
    textAlign: 'center',
  },
  titulo2: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'Catamaran_900Black',
    textAlign: 'center',
  },
  titulo3: {
    margin: 24,
    fontSize: 30,
    fontFamily: 'MeowScript_400Regular',
    textAlign: 'center',
  },
  titulo4: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'NotoSansSiddham_400Regular',
    textAlign: 'center',
  },
  titulo5: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'Rosario_500Medium',
    textAlign: 'center',
  },
  titulo6: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'Yantramanav_500Medium',
    textAlign: 'center',
  },
  titulo7: {
    margin: 24,
    fontSize: 45,
    fontFamily: 'KolkerBrush_400Regular',
    textAlign: 'center',
  },
  titulo8: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'RampartOne_400Regular',
    textAlign: 'center',
  },
  titulo9: {
    margin: 24,
    fontSize: 20,
    fontFamily: 'PTSerifCaption_400Regular',
    textAlign: 'center',
  },
  titulo10: {
    margin: 24,
    fontSize: 30,
    fontFamily: 'MrsSheppards_400Regular',
    textAlign: 'center',
  },
  caixa: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#f0d1b3',
    padding: 15,
    maxHeight: 1000,
    maxWidth: 400,
    borderRadius: 5,
  },
});
