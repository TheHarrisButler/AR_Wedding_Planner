import React, {useState} from 'react';
import {View, Text, ImageBackground, Alert, Modal, Pressable} from 'react-native';
import StyledButton from '../StyledButton'; 
import styles from './styles.js';  


const FurnitureItem = (props) => {

    const { name, image, description} = props.furniture;
    
    const [modalVisible, setModalVisible] = useState(false); 

    return (
    <View style={styles.furnitureContainer}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>

            <Text style={styles.modalText}>{description}</Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>Check availibility in your area.</Text>
      </View>

      <View style={styles.buttonContainer}>
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
          onPress={() => setModalVisible(true)}
        />
      </View>

    </View>
    ); 
}; 

export default FurnitureItem;