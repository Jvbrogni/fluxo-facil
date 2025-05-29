import React, { useState, useCallback } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import logoImage from '@/assets/images/logo.png';
import { AuthService } from '@/services/AuthService';

export default function LoginScreen(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const userCredential = await AuthService.login(email, password);
      Alert.alert('Login Bem-sucedido', `Bem-vindo, ${userCredential.user.email}!`);
      router.push('/home');
    } catch {
      Alert.alert('Erro de Login', 'Usuário ou senha incorretos.');
    } finally {
      setLoading(false);
    }
  }, [email, password, router]);

  return (
      <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholderTextColor="#999"
        />
        <TouchableOpacity
            style={[styles.button, loading && styles.buttonDisabled]}
            onPress={handleLogin}
            activeOpacity={0.8}
            disabled={loading}
        >
          {loading ? (
              <ActivityIndicator color="#fff" />
          ) : (
              <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f4f6f8',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    width: '100%',
    backgroundColor: '#1e90ff',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
