import * as React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Option from './Components/Option';
import SongInfo from './Components/SongInfo'
import PlayButtons from './Components/PlayerButtons';

const Cart = ({ route }) => {

    const renderItem = (item) => (
        <View style={styles.listContainer}>

            <Option
                item={item}
            />

            <SongInfo item={item} />
            <PlayButtons />
        </View>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={route.params.cart}
                renderItem={({ item, index, separators }) => renderItem(item)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    listContainer: {
        flex: 1,
        backgroundColor: '#203365',
        margin: 10,
        padding: 20,
        borderRadius: 20,
    }
})

export default Cart;