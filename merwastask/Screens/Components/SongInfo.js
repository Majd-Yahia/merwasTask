import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SongInfo = ({ item }) => {
    return (
        <View style={styles.container}>
            <Icon
                name="music"
                size={32}
                color="#fff"
            />
            <View>
                <Text style={styles.text}>{item.artist} - {item.song} </Text>
                <Text style={styles.text}>{item.album} {item.duration / 60} minutes </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 2
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        marginLeft: 10
    }
})

export default SongInfo;