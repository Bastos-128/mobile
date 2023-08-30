import { Text, View, StyleSheet, Image, ScrollView, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
          <Text> </Text>
      <Text style={styles.titulo}>Encomenda de Bolos</Text>
        <ScrollView>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Bolo De Prestijio
          </Text>
          <Image style={styles.img} source={require('./Bolo01.png')}/>
          <Text style={styles.descri}>
          Bolo de prestígio: um bolo de chocolate recheado com um creme de coco e coberto com uma calda de chocolate. Uma delícia para os amantes de coco e chocolate.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 35,00 o quilo</Text>
          </View>          
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Bolo De Limão
          </Text>
          <Image style={styles.img} source={require('./Bolo02.png')}/>
          <Text style={styles.descri}>
          Bolo de limão: um bolo fofinho e aromático, feito com suco e raspas de limão. Perfeito para acompanhar um café ou chá.
          </Text>  
          <Text style={styles.titulo}>Preço: R$ 25,00 o quilo</Text>        
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Bolo De Chocolate Estrelado
          </Text>
          <Image style={styles.img} source={require('./Bolo03.png')}/>
          <Text style={styles.descri}>
          Bolo de chocolate estrelado: um bolo de chocolate escuro, recheado e coberto com uma mistura de chocolate meio amargo e creme de leite. Decorado com bolachas maria e estrelas de carambola. Uma sobremesa sofisticada e saborosa.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 40,00 o quilo</Text>           
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Torta De Chocolate
          </Text>
          <Image style={styles.img} source={require('./Bolo10.png')}/>
          <Text style={styles.descri}>
          Torta de chocolate: uma torta feita com uma massa crocante e um recheio cremoso de chocolate. Pode ser servida com morangos, cerejas ou raspas de chocolate. Uma tentação para os chocólatras.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 30,00 o quilo</Text>            
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Torta De Futras
          </Text>
          <Image style={styles.img} source={require('./Bolo11.png')}/>
          <Text style={styles.descri}>
          Torta de frutas: uma torta feita com uma massa leve e um creme de baunilha. Coberta com frutas frescas variadas, como kiwi, morango, carambola e outras. Uma opção refrescante e saudável.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 35,00 o quilo</Text>            
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Bolo De Chocolate e Cereja
          </Text>
          <Image style={styles.img} source={require('./Bolo12.png')}/>
          <Text style={styles.descri}>
          Bolo de chocolate e cereja: um bolo de chocolate macio, recheado com um creme de leite condensado cozido e cerejas picadas. Coberto com uma calda de brigadeiro e mais cerejas. Um bolo irresistível e festivo.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 45,00 o quilo</Text>            
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Pão Doce
          </Text>
          <Image style={styles.img} source={require('./Doce01.png')}/>
          <Text style={styles.descri}>
          Pão doce: um pão macio e adocicado, feito com leite, ovos, manteiga e açúcar. Pode ser recheado com coco, goiabada, doce de leite ou outro sabor de sua preferência. Ideal para o café da manhã ou lanche da tarde.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 15,00 o quilo</Text>            
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Rosca De Chocolate
          </Text>
          <Image style={styles.img} source={require('./Doce02.png')}/>
          <Text style={styles.descri}>
          Rosca de chocolate: uma rosca doce feita com uma massa enriquecida com leite em pó, ovos e manteiga. Recheada com creme de avelã com cacau (Nutella) e gotas de chocolate. Assada até ficar dourada e pincelada com uma calda de açúcar. Uma rosca deliciosa e vistosa.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 20,00 o quilo</Text>            
          </View>
          <Text> </Text>
          <View style={styles.caixa}>
          <Text style={styles.paragraph}>
          Doce De Nozes
          </Text>
          <Image style={styles.img} source={require('./Doce03.png')}/>
          <Text style={styles.descri}>
          Pão de nozes: um pão rico em sabor e textura, feito com fermento natural, leite em pó, ovos, manteiga, açúcar e nozes picadas. Assado até ficar crocante por fora e macio por dentro. Um pão especial para ocasiões especiais.
          </Text>
          <Text style={styles.titulo}>Preço: R$ 25,00 o quilo</Text>          
          </View>
          <Text> </Text>
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0d1',
    padding: 8,
  },
  titulo :{
    textAlignVertical: 'top',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img : {
    height: 300,
    width: 350,
    alignSelf: 'center'
  },
  caixa:{
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#f0d1b3',
    padding: 2,
    maxHeight: 550,
    maxWidth: 400,
    borderRadius: 5,

  },
  paragraph: {
    margin: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'samsung-sams'
      },
  descri:{
    margin: 10,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'samsung-sams'

  },
});
