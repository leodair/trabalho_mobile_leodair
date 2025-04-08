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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
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


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#ffff',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
