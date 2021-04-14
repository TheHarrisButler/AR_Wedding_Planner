import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image, Pressable, Text} from 'react-native';
import FurnitureList from './components/FurnitureList';
import Header from './components/Header';

import Amplify from 'aws-amplify'; 
import config from './src/aws-exports'; 
Amplify.configure(config); 

import { withAuthenticator } from 'aws-amplify-react-native'; 
import { Auth } from 'aws-amplify';

import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


const logout = () => {
  Auth.signOut();  
}

function Home ({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('./assets/silicon_wedding1.png')}/>

        <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.menu} source={require('./assets/menu.png')}/>
        </Pressable>  
      </View>

      <FurnitureList type="chairs" />
       
      <StatusBar style="auto" />
    </View>
  );
}

function Flowers( {navigation} ) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('./assets/silicon_wedding1.png')}/>

        <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.menu} source={require('./assets/menu.png')}/>
        </Pressable>  
      </View>

      <FurnitureList type="flowers" />
      
      <StatusBar style="auto" />
    </View>
  );
}

function Tables( {navigation} ) {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('./assets/silicon_wedding1.png')}/>

        <Pressable onPress={() => navigation.openDrawer()}>
            <Image style={styles.menu} source={require('./assets/menu.png')}/>
        </Pressable>  
      </View>

      <FurnitureList type="tables" />
      
      <StatusBar style="auto" />
    </View>
  );
}

function CustomDrawerContent(props) {
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props}/>
      <DrawerItem 
        label="logout"
        onPress={logout}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Flowers" component={Flowers}/>
      <Drawer.Screen name="Tables" component={Tables}/>
    </Drawer.Navigator>
  );
}

const App = ()  => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 10,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain'
  },
  menu: {
      top: 40,
      width: 25,
      height: 25, 
      resizeMode: 'contain',
  }
});

export default withAuthenticator(App); 
