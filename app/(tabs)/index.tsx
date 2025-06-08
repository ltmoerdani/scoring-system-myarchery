import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScoringTab() {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1" style={styles.title}>
          Archery Scoring
        </Text>
        <Text category="s1" style={styles.subtitle}>
          Start a new scoring session or continue your practice
        </Text>
        
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            size="large"
          >
            New Session
          </Button>
          
          <Button
            style={styles.button}
            appearance="outline"
            size="large"
          >
            Practice Mode
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  layout: {
    flex: 1,
    padding: 24,
    backgroundColor: 'transparent',
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#222B45',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40,
    color: '#8F9BB3',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
  },
});