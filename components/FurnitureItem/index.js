import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton'; 
import styles from './styles.js';  

const FurnitureItem = (props) => {
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

        <StyledButton 
          type="primary" 
          content={"View in AR"}
          onPress={() => {
            console.warn('View AR was Pressed');
          }}
        />

        <StyledButton 
          type="secondary" 
          content={"Learn More"}
          onPress={() => {
            console.warn('Learn More was Pressed');
          }}
        />

    </View>
    ); 
}; 

export default FurnitureItem;