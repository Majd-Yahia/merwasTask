import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Featured() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>FEATURED</Text>
        </View>
    );
};

export { Featured };


function BestSeller() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text >BEST SELLER</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    }
})

export { BestSeller };