import React, {useEffect, useState}from 'react'; 
import {View, Text, FlatList, Dimensions} from 'react-native';
import FurnitureItem from '../FurnitureItem';
import styles from './styles.js';
 
import { API, graphqlOperation }from 'aws-amplify'; 
import { listChairs, listFlowers, listTables } from '../../src/graphql/queries'; 

const FurnitureList = (props) => {

    const [chairs, setChairs] = useState([]);
    const [flowers, setFlowers] = useState([]);
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const fetchChairs = async () => {

            try {
                const response = await API.graphql(graphqlOperation(listChairs));
                setChairs(response.data.listChairs.items); 
            } catch (e) {
                console.log(e);
            }
        }

        const fetchFlowers = async () => {

            try {
                const response = await API.graphql(graphqlOperation(listFlowers)); 
                setFlowers(response.data.listFlowers.items); 
            } catch (e) {
                console.log(e); 
            }
        }

        const fetchTables = async () => {
            try {
                const response = await API.graphql(graphqlOperation(listTables)); 
                setTables(response.data.listTables.items); 
            } catch (e) {
                console.log(e); 
            }
        }
        fetchChairs();
        fetchFlowers();
        fetchTables();
    }, []); 

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
