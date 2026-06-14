import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetallScreen({ route }) {
    //Recibimos los parámetros de la navegación [cite: 195]
    const { postre } = route.parame;
    return (
        <ScrollView style={StyleSheet.container} showsVerticalScrollIndicator={false}>
            <Image source={{ uri: postre.img }} style={StyleSheet.coverImage} />
            <LinearGradient colors={['transparent', '#f691a5']} style={StyleSheet.gradient}/>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{postre.titulo}</Text>
                <Text style={styles.ingredents}>{postre.ingredientes}</Text>
                <Text style={styles.passes}>{postre.pasos}</Text>
                {/*Nuevo componente para mostrar en la descripción*/}
                <Text style={styles.price}>{postre.precio}</Text>

                 <TouchableOpacity style={styles.RecetaButton}>
                    <Text style={styles.RecetaButtonText}>Ver Receta</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buyButtonText}>Comprar Ahora</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
    );
}