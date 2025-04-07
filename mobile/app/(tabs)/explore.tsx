import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Platform, View, Text, ActivityIndicator } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const [symptoms, setSymptoms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os dados da API
  const fetchSymptoms = async () => {
    try {
      const response = await fetch('https://api.example.com/ansiedade/sintomas'); // Substitua pela URL da sua API
      const data = await response.json();
      setSymptoms(data); // Armazenando os dados da API no estado
      setLoading(false); // Alterando o estado para indicar que os dados foram carregados
    } catch (error) {
      setError('Erro ao carregar dados');
      setLoading(false);
    }
  };

  // Chama a função para buscar os dados assim que o componente for montado
  useEffect(() => {
    fetchSymptoms();
  }, []);

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
      <ThemedText>
        A ansiedade pode causar diversos problemas de saúde, incluindo sintomas físicos como taquicardia, dor no peito, e distúrbios gastrointestinais. Além disso, pode levar a doenças mais graves, como hipertensão, gastrite e até aumentar o risco de infarto e AVC.
      </ThemedText>
      <ThemedText type="subtitle">Sintomas Físicos da Ansiedade</ThemedText>

      {/* Exibição de carregamento ou erro */}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <ThemedText>{error}</ThemedText>
      ) : (
        // Renderizando os sintomas da API
        <View>
          {symptoms.length > 0 ? (
            symptoms.map((symptom, index) => (
              <ThemedText key={index}>
                <li>{symptom}</li> {/* Exibindo os sintomas da API */}
              </ThemedText>
            ))
          ) : (
            <ThemedText>Não há sintomas disponíveis.</ThemedText>
          )}
        </View>
      )}
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
