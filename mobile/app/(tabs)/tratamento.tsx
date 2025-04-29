import { Image, StyleSheet, Platform, TouchableOpacity, Text, Linking, SafeAreaView, ScrollView, Button, View } from 'react-native';
import { useState } from 'react';

export default function HomeScreen() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const containerStyle = theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const textStyle = theme === 'light' ? styles.lightText : styles.darkText;
  const headerBackgroundColor = theme === 'light' ? '#A1CEDC' : '#2345';
  const buttonColor = theme === 'light' ? '#007AFF' : '#1a73e8';

  const handleButtonPress = () => {
    Linking.openURL('https://www.minhavida.com.br/saude/temas/ansiedade');
  };

  return (
    <SafeAreaView style={containerStyle}>
      <ScrollView style={containerStyle}>
        {/* Header com imagem e botão de tema */}
        <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
          <Image
            source={require('@/assets/images/ansiedade-vs-transtorno-1-1024x1024.jpg')}
            style={styles.headerImage}
          />
          <View style={styles.themeButtonContainer}>
            <Button 
              title={`Modo ${theme === 'light' ? 'Escuro' : 'Claro'}`} 
              onPress={toggleTheme} 
            />
          </View>
        </View>

        {/* Conteúdo principal */}
        <View style={[styles.contentContainer, containerStyle]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, textStyle]}>Como tratar a Ansiedade</Text>
          </View>

          <Text style={[styles.contentText, textStyle]}>
            A ansiedade é uma resposta natural do corpo a situações de estresse ou perigo...
          </Text>

          <View style={styles.titleContainer}>
            <Text style={[styles.title, textStyle]}>Como pode pedir ajuda</Text>
          </View>

          <Text style={[styles.contentText, textStyle]}>
            Quando alguém está enfrentando episódios de ansiedade, é importante buscar ajuda para lidar com a situação de maneira adequada. A pessoa pode procurar apoio em diversos lugares, como psicólogos e psiquiatras, que são profissionais especializados em tratar questões emocionais. Também é possível buscar apoio em grupos de apoio ou em clínicas de saúde mental. Além disso, a conversa com amigos e familiares pode ser reconfortante, pois o apoio social é fundamental. Em casos mais urgentes, pode-se procurar a ajuda de serviços de emergência, como hospitais ou centros de atendimento psicológico, que podem oferecer o suporte necessário para enfrentar a crise de ansiedade. O importante é lembrar que pedir ajuda é um passo fundamental para o bem-estar e recuperação.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={[styles.customButton, { backgroundColor: buttonColor }]} 
              onPress={handleButtonPress}
            >
              <Text style={styles.buttonText}>Clique aqui para saber mais</Text>
            </TouchableOpacity>
          </View>
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
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  headerImage: {
    height: 300,
    width: '100%',
  },
  contentContainer: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  themeButtonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 5,
    padding: 2,
  },
});