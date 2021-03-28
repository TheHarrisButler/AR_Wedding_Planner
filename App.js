import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import FurnitureList from './components/FurnitureList';
import Header from './components/Header';

import Amplify from 'aws-amplify'; 
import config from './src/aws-exports'; 
Amplify.configure(config); 

import { withAuthenticator } from 'aws-amplify-react-native'; 

const App = ()  => {
  return (
    <View style={styles.container}>

      <Header />

      <FurnitureList />
       
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default withAuthenticator(App); 
