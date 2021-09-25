import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Option = ({ item }) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.btn}>
                <Icon
                    name="cc-visa"
                    size={32}
                    color="#f9954e"
                    style={{ marginLeft: 20 }}
                />
            </TouchableOpacity>

            <Text style={styles.text}> Buy now for {item.price}$</Text>

            <TouchableOpacity
                style={styles.btn}
            >
                <Icon
                    name="minus-circle"
                    size={32}
                    color="#f9954e"
                    style={{ marginLeft: 20 }}

                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        marginBottom: 5,
    },
    text: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    btn: {
        margin: 10
    }

})

export default Option;