import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{  light: '#A1CEDC', dark: '#2345' }}
      headerImage={
        <Image
          source={require('@/assets/images/19.jpg')}
          style={styles.headerImage}
        />
      }>
       
     
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Perigos da Ansiedade</ThemedText>
      </ThemedView>
      <ThemedText>A ansiedade pode causar diversos problemas de saúde, incluindo sintomas físicos como taquicardia, dor no peito, e distúrbios gastrointestinais. Além disso, pode levar a doenças mais graves, como hipertensão, gastrite e até aumentar o risco de infarto e AVC.</ThemedText>
      <ThemedText type="subtitle">Sintomas Físicos da Ansiedade</ThemedText>
      <ThemedText>
        <li>Tensão muscular</li>
        <li>Palpitações cardíacas</li>
        <li>Dor no peito</li>
        <li>Transpiração excessiva</li>
        <li>Dor de cabeça</li>
        <li>Tontura</li>
        <li>Boca seca</li>
        <li>Braços dormentes</li>
        <li>Náuseas e diarreia</li>
        <li>Problemas digestivos</li>
      </ThemedText>
      <Image
          source={require('@/assets/images/ansiedade-vs-transtorno-1-1024x1024.jpg')}
          style={styles.headerImage}
        />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 500,
    bottom: 0,
    left: 0,
    
  },
  titleContainer: {
    flexDirection: 'row',
    gap:10,
  },
});
