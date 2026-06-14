import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Iconicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import POSTRES from './data/datos.json';

// or any files within the Snack
import AssetExample from './components/AssetExample';
export default function App() {
  const [busqueda, setBusqueda] = useState('');
  const postresFiltrados = POSTRES.filter((postre) =>
    postre.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );
const router = useRouter();
  return (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headertitle}>
        The Dessert Spot 🧁
      </Text>
    </View>
    
    <TextInput
      style={styles.buscador}
      placeholder="Buscar postre..."
      placeholderTextColor="#080616"
      value={busqueda}
      onChangeText={(texto) => setBusqueda(texto)}
      />
      
    <FlatList
      data={postresFiltrados} //datos
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 20 }}
     renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('VerReceta' { postre: item.postre })}>
            <View style={styles.card}>
                <Image source={{ uri: item.img}} style={styles.cardImage}/>

                {/*Degradado para hacer el texto legible sobre cualquier imagen */}
                <LinearGradient
                    colors={['#f691a5', '#ffb6c1', '#ffc3d1']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.card}>

                {/*Insignia de postre flotante*/}
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.postre}</Text>
                </View>

    <Text style={styles.title}>
      {item.titulo}
    </Text>

    <Image
      source={{ uri: item.img }}
      style={styles.image}
    />

    <View style={styles.info}>

      <Text style={[styles.ingredents, { fontWeight: 'bold' }]}>
        Ingredientes:
      </Text>

      <Text style={styles.ingredents}>
        {item.ingredientes}
      </Text>

      <Text style={[styles.passed, { fontWeight: 'bold' }]}>
        Paso a paso:
      </Text>

      <Text style={styles.passed}>
        {item.pasos}
      </Text>

    </View>

  </LinearGradient>
  </TouchableOpacity>
)}     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', paddingHorizontal:20},
  header: {backgroundColor: '#ddfff7', padding: 20, alignItems: 'center', borderRadius:8 },
  headertitle: {color: '#f69', fontSize: 24, fontWeight:'bold'},
  card: {backgroundColor: '#f691a5', flexDirection: 'column', flex: 1, margin: 16, padding: 20, borderRadius: 12, elevation: 8, shadowColor:'#000', shadowOffset:{width:0, height:6}, shadowOpacity: 0.15, shadowRadius: 10},
  image: {width: 100, height: 100, borderRadius: 8, flex:1,  alignItems: 'center', marginLeft: 200, elevation: 8, shadowColor:'#E8EDF2', shadowOffset:{width:0, height:6}, shadowOpacity: 0.15, shadowRadius: 10},
  info: { marginLeft: 10, justifyContent: 'center'},
  title: {fontSize: 18, fontWeight: 'bold', fontFamily: 'mercurius',  color: '#ddfff7'},
  ingredents: { marginTop: 4, fontSize: 16, fontFamily: 'arial', color:"white"},
  passed: { color: 'white', fontSize: 16, marginTop: 4, fontFamily: 'arial'},
 buscador: {backgroundColor: "#E8EDF2", borderRadius: 7, padding:8, margin:16, borderWidth: 1, borderColor:"#ccc"}
});
