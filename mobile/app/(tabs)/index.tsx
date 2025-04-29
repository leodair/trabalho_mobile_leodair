import { Image, StyleSheet, Platform, Button, View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Estilos condicionais idênticos ao primeiro código
  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;
  const headerBackgroundColor = theme === 'light' ? '#A1CEDC' : '#2345';

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView style={containerStyle}>
        {/* Header com imagem e botão */}
        <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
          <Image
            source={require('@/assets/images/ansiedade.jpg')}
            style={styles.headerImage}
          />
          <View style={styles.buttonContainer}>
            <Button 
              title={`Modo ${theme === 'light' ? 'Escuro' : 'Claro'}`} 
              onPress={toggleTheme} 
            />
          </View>
        </View>

        {/* Conteúdo - mantendo a estrutura original mas com os estilos de tema aplicados */}
        <View style={[styles.contentContainer, containerStyle]}>
          <ThemedText type="title" style={[styles.title, textStyle]}>Ansiedade</ThemedText>

          <ThemedText style={[styles.textContent, textStyle]}>
            A ansiedade é uma resposta natural do corpo a situações de estresse ou perigo. Ela pode se manifestar como uma sensação de preocupação, nervosismo ou medo, e é comum sentir ansiedade em momentos desafiadores, como antes de uma apresentação ou de um exame.
          </ThemedText>

          <ThemedText type="subtitle" style={[styles.subtitle, textStyle]}>O que é Ansiedade</ThemedText>
          
          <ThemedText style={[styles.textContent, textStyle]}>
            No entanto, quando a ansiedade se torna excessiva ou persistente, pode interferir nas atividades diárias e se transformar em um transtorno de ansiedade, que pode exigir atenção e tratamento. Se você ou alguém que você conhece está enfrentando dificuldades com a ansiedade, é sempre bom buscar apoio profissional.
          </ThemedText>

          <ThemedText type="subtitle" style={[styles.subtitle, textStyle]}>TIPOS DE ANSIEDADE</ThemedText>
          
          <ThemedText style={[styles.textContent, textStyle]}>
            • Transtorno de Ansiedade Generalizada (TAG): Caracterizado por preocupação excessiva e estresse
          </ThemedText>
          <ThemedText style={[styles.textContent, textStyle]}>
            • Transtorno de Pânico (TP): Um tipo de ansiedade que pode causar crises de pânico
          </ThemedText>
          <ThemedText style={[styles.textContent, textStyle]}>
            • Transtorno de Ansiedade Fóbico: Também conhecido como "fobia social"
          </ThemedText>
          <ThemedText style={[styles.textContent, textStyle]}>
            • Agorafobia: Medo ou ansiedade de espaços que não são considerados seguros
          </ThemedText>
          <ThemedText style={[styles.textContent, textStyle]}>
            • Transtorno de Estresse Pós-Traumático (TEPT): Crises de ansiedade relacionadas a eventos traumáticos
          </ThemedText>
          <ThemedText style={[styles.textContent, textStyle]}>
            • Transtorno Obsessivo Compulsivo (TOC): Pode causar obsessões e compulsões
          </ThemedText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos idênticos ao primeiro código
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
    position: 'relative',
  },
  headerImage: {
    height: 250,
    width: '100%',
  },
  contentContainer: {
    padding: 20,
    flex: 1,
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
    marginBottom: 10,
  },
  textContent: {
    marginBottom: 10,
    lineHeight: 20,
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 5,
    padding: 2,
  },
});