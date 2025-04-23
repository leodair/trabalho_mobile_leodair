import { Image, StyleSheet, Platform, TouchableOpacity, Text, Linking } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  const handleButtonPress = () => {
    Linking.openURL('https://www.minhavida.com.br/saude/temas/ansiedade');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#2345' }}
      headerImage={
        <Image
          source={require('@/assets/images/ansiedade-vs-transtorno-1-1024x1024.jpg')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Como tratar a Ansiedade</ThemedText>
      </ThemedView>

      <ThemedText>
        A ansiedade é uma resposta natural do corpo a situações de estresse ou perigo...
      </ThemedText>

      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButton} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Clique aqui para saber mais</Text>
        </TouchableOpacity>
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
    height: 300,
    width: 340,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  customButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
