import React from 'react'; 
import {View, Image, Pressable} from 'react-native';
import { Auth } from 'aws-amplify';
import styles from './styles';

const Header = (props) => {

    const logout = () => {
        Auth.signOut();  
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/silicon_wedding1.png')}/>

            <Pressable onPress={logout}>
                <Image style={styles.menu} source={require('../../assets/menu.png')}/>
            </Pressable>  
        </View>
    );
};

export default Header;