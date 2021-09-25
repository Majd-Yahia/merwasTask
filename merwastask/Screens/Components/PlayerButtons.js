import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const PlayButtons = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon
                    name="volume-down"
                    size={32}
                    color="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon
                    name="play"
                    size={32}
                    color="#fff"
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Icon
                    name="volume-up"
                    size={32}
                    color="#fff"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
    }
})


export default PlayButtons;