import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles.js';  

const FurnitureItem = () => {
    return (
    <View style={styles.furnitureContainer}>

        <ImageBackground
          source={require('../../assets/furniture_1.jpg')}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>Chiavari Chair</Text>
          <Text style={styles.subtitle}>Check availibility in your area.</Text>
        </View>

    </View>
    ); 
}; 

export default FurnitureItem;