import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList, TextInput, Button} from 'react-native';
import { Link } from 'expo-router';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import POSTRES from './datos.json';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function Lechenevada() {
 
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headertitle}>
        The Dessert Spot 🧁
      </Text>
    </View>
    <Link href="/App">Volver al inicio</Link>
    </SafeAreaView>
  );
}
    const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f691a5'},
  header: {backgroundColor: '#ddfff7', padding: 20, alignItems: 'center', borderRadius:8 },
  headertitle: {color: '#f69', fontSize: 24, fontWeight:'bold'}
    });