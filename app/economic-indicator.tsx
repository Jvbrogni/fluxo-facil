import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';
import { EconomicService, Indicator } from '@/services/EconomicService';

export default function EconomicIndicatorsScreen() {
  const [indicators, setIndicators] = useState<{ usd: Indicator; eur: Indicator } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchEconomicData = async () => {
      try {
        const result = await EconomicService.getIndicators();
        setIndicators(result);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar dados econômicos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchEconomicData();
  }, []);

  const goToHomeScreen = () => {
    router.push('/home');
  };

  if (loading) {
    return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#1e90ff" />
          <Text style={styles.loadingText}>Carregando dados...</Text>
        </View>
    );
  }

  if (error) {
    return (
        <View style={styles.loadingContainer}>
          <FontAwesome name="exclamation-triangle" size={50} color="#E83F5B" />
          <Text style={styles.loadingText}>{error}</Text>
        </View>
    );
  }

  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={goToHomeScreen}>
            <FontAwesome name="arrow-left" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Indicadores Econômicos</Text>
        </View>

        <ScrollView style={styles.content}>
          {indicators &&
              Object.entries(indicators).map(([key, indicator]) => (
                  <View key={key} style={styles.indicatorCard}>
                    <Text style={styles.indicatorTitle}>{indicator.name}</Text>
                    <Text style={styles.indicatorValue}>R$ {indicator.value}</Text>
                    <Text
                        style={[
                          styles.indicatorVariation,
                          parseFloat(indicator.variation) >= 0
                              ? styles.positiveVariation
                              : styles.negativeVariation,
                        ]}
                    >
                      {indicator.variation}%{' '}
                      {parseFloat(indicator.variation) >= 0 ? '↑' : '↓'}
                    </Text>
                  </View>
              ))}
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1f26',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#2E3C3D',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1f26',
    paddingHorizontal: 20,
  },
  loadingText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  indicatorCard: {
    backgroundColor: '#253031',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  indicatorTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  indicatorValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },
  indicatorVariation: {
    fontSize: 16,
    marginTop: 5,
  },
  positiveVariation: {
    color: '#12A454',
  },
  negativeVariation: {
    color: '#E83F5B',
  },
});
