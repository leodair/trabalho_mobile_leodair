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

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Como pode pedir ajuda</ThemedText>
      </ThemedView>

      <ThemedText>
      Quando alguém está enfrentando episódios de ansiedade, é importante buscar ajuda para lidar com a situação de maneira adequada. A pessoa pode procurar apoio em diversos lugares, como psicólogos e psiquiatras, que são profissionais especializados em tratar questões emocionais. Também é possível buscar apoio em grupos de apoio ou em clínicas de saúde mental. Além disso, a conversa com amigos e familiares pode ser reconfortante, pois o apoio social é fundamental. Em casos mais urgentes, pode-se procurar a ajuda de serviços de emergência, como hospitais ou centros de atendimento psicológico, que podem oferecer o suporte necessário para enfrentar a crise de ansiedade. O importante é lembrar que pedir ajuda é um passo fundamental para o bem-estar e recuperação.
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
