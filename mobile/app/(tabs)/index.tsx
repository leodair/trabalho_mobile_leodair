import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/ansiedade.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Ansiedade</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Oque é Ansiedade</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold">A ansiedade é uma resposta natural do corpo a situações de estresse ou perigo. Ela pode se manifestar como uma sensação de preocupação, nervosismo ou medo, e é comum sentir ansiedade em momentos desafiadores, como antes de uma apresentação ou de um exame. No entanto, quando a ansiedade se torna excessiva ou persistente, pode interferir nas atividades diárias e se transformar em um transtorno de ansiedade, que pode exigir atenção e tratamento. Se você ou alguém que você conhece está enfrentando dificuldades com a ansiedade, é sempre bom buscar apoio profissional.</ThemedText> 
          {' '}
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
        <ThemedText type="title">Tipos de ansiedade</ThemedText>
        <ThemedText type="subtitle"> Transtorno de Ansiedade Generalizada (TAG)</ThemedText>
      <ThemedView type="defaultSemiBold">Caracteriza-se por preocupação excessiva e persistente sobre diversas áreas da vida (trabalho, saúde, relacionamentos) por pelo menos seis meses. Pode vir acompanhada de sintomas como fadiga, tensão muscular e dificuldade de concentração.
      {''}</ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
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
