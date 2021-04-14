import React from 'react'; 
import {View, Text, FlatList, Dimensions} from 'react-native';
import FurnitureItem from '../FurnitureItem';
import styles from './styles.js';
import chairs from './chairs.js';
import flowers from './flowers.js';
import tables from './tables.js'; 

const FurnitureList = (props) => {

    const type = props.type;

    switch(type) {
        case 'chairs':
            return(
                <View style={styles.container}>
                    <FlatList 
                        data={chairs}
                        renderItem={({item}) => <FurnitureItem furniture={item}/>}
                        showsVerticalScrollIndicator={false}
                        snapToAlignment={'start'}
                        decelerationRate={'fast'}
                        snapToInterval={Dimensions.get('window').height}
                    />
                </View>
            )
            break;
        case 'flowers':
            return (
                <View style={styles.container}>
                    <FlatList 
                        data={flowers}
                        renderItem={({item}) => <FurnitureItem furniture={item}/>}
                        showsVerticalScrollIndicator={false}
                        snapToAlignment={'start'}
                        decelerationRate={'fast'}
                        snapToInterval={Dimensions.get('window').height}
                    />
                </View>
            )
            break;
        case 'tables':
            return (
                <View style={styles.container}>
                    <FlatList 
                        data={tables}
                        renderItem={({item}) => <FurnitureItem furniture={item}/>}
                        showsVerticalScrollIndicator={false}
                        snapToAlignment={'start'}
                        decelerationRate={'fast'}
                        snapToInterval={Dimensions.get('window').height}
                    />
                </View>
            )
            break; 
    }
};

export default FurnitureList;
