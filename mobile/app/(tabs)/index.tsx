import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#2345' }}
      headerImage={
        <Image
          source={require('@/assets/images/ansiedade.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ansiedade</ThemedText>
      
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Oque é Ansiedade</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> 
          {' '}
          <ThemedText>
          A ansiedade é uma resposta natural do corpo a situações de estresse ou perigo. Ela pode se manifestar como uma sensação de preocupação, nervosismo ou medo, e é comum sentir ansiedade em momentos desafiadores, como antes de uma apresentação ou de um exame. No entanto, quando a ansiedade se torna excessiva ou persistente, pode interferir nas atividades diárias e se transformar em um transtorno de ansiedade, que pode exigir atenção e tratamento. Se você ou alguém que você conhece está enfrentando dificuldades com a ansiedade, é sempre bom buscar apoio profissional.
          </ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">TIPOS DE ANSIEDADE</ThemedText>
        </ThemedView>
        <ThemedText>
        Transtorno de Ansiedade Generalizada (TAG): Caracterizado por preocupação excessiva e estresse, que pode levar a fadiga, irritabilidade e tensão muscular 
        </ThemedText>
        <ThemedText>
        Transtorno de Pânico (TP): Um tipo de ansiedade que pode causar crises de pânico 
        </ThemedText>
        <ThemedText>
        Transtorno de Ansiedade Fóbico: Também conhecido como "fobia social", é um medo excessivo de situações sociais, como conversar com estranhos 
        </ThemedText>
        <ThemedText>
        Agorafobia: Medo ou ansiedade de espaços que não são considerados seguros 
        </ThemedText>
        <ThemedText>
        Transtorno de Estresse Pós-Traumático (TEPT): Crises de ansiedade relacionadas a flashbacks e pesadelos de eventos traumáticos 
        </ThemedText>
        <ThemedText>
        Transtorno Obsessivo Compulsivo (TOC): Um tipo de ansiedade que pode causar obsessões e compulsões 
        </ThemedText>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
