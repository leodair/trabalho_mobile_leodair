import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, SafeAreaView, ScrollView } from 'react-native';

export default function TabTwoScreen() {
 
  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;
  const headerBackgroundColor = theme === 'light' ? '#A1CEDC' : '#2345'; 

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView>
        <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
          <Image source={require('@/assets/images/19.jpg')} style={styles.headerImage} />
          <View style={styles.buttonContainer}>
            <Button title={`Modo ${theme === 'light' ? 'Escuro' : 'Claro'}`} onPress={toggleTheme} />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.title, textStyle]}>Perigos da Ansiedade</Text>

          <Text style={textStyle}>
            A ansiedade pode causar diversos problemas de saúde, incluindo sintomas físicos como taquicardia,
            dor no peito, e distúrbios gastrointestinais. Além disso, pode levar a doenças mais graves, como hipertensão,
            gastrite e até aumentar o risco de infarto e AVC.
          </Text>

          <Text style={[styles.subtitle, textStyle]}>Sintomas Físicos da Ansiedade</Text>

          <Text style={textStyle}>
            <Text>• Tensão muscular{'\n'}</Text>
            <Text>• Palpitações cardíacas{'\n'}</Text>
            <Text>• Dor no peito{'\n'}</Text>
            <Text>• Transpiração excessiva{'\n'}</Text>
            <Text>• Dor de cabeça{'\n'}</Text>
            <Text>• Tontura{'\n'}</Text>
            <Text>• Boca seca{'\n'}</Text>
            <Text>• Braços dormentes{'\n'}</Text>
            <Text>• Náuseas e diarreia{'\n'}</Text>
            <Text>• Problemas digestivos{'\n'}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#333',
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
  header: {
    height: 250,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Adicionado para o posicionamento absoluto do botão
  },
  headerImage: {
    height: 250,
    width: '100%',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonContainer: {
    position: 'absolute', // Para posicionar o botão
    top: 10, // Distância do topo
    right: 10, // Distância da direita
    zIndex: 1, // Para garantir que o botão fique acima de outros elementos
  },
})