import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsTab() {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text category="h1" style={styles.title}>
          Settings
        </Text>
        <Text category="s1" style={styles.subtitle}>
          Customize your archery experience
        </Text>
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
    color: '#8F9BB3',
  },
});