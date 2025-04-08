import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  // Função para o botão
  const handleButtonPress = () => {
    console.log("Botão pressionado!");
  };

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
        <ThemedText type="title">Como tratar a Ansiedade</ThemedText>
      </ThemedView>
     
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          {' '}
          A ansiedade é uma resposta natural do corpo a situações de estresse ou perigo...
        </ThemedText>
    
      
      {/* Botão adicionado abaixo do conteúdo */}
      <ThemedView style={styles.buttonContainer}>
        <Button title="Clique aqui para saber mais" onPress={handleButtonPress} />
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
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});
