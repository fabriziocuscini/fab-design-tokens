import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-reusables';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Fab Design Tokens</Text>
        <Text style={styles.subtitle}>React Native Mobile App</Text>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Primary Button" 
            variant="filled" 
            color="#3B82F6" 
            onPress={() => alert('Primary button pressed!')} 
          />
          
          <Button 
            title="Secondary Button" 
            variant="outlined" 
            color="#10B981" 
            onPress={() => alert('Secondary button pressed!')} 
            style={styles.secondaryButton}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
  },
  secondaryButton: {
    marginTop: 16,
  },
}); 