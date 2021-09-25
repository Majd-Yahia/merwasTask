import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconBadge from 'react-native-icon-badge';

const Header = ({ navigation, cart, removeHandler }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <IconBadge
                MainElement={
                    <View style={{
                        width: 50,
                        height: 50,
                        margin: 3,
                        justifyContent: 'center',
                        alignContent: 'center',
                    }} >
                        <Icon
                            name="shopping-cart"
                            size={32}
                            onPress={() => navigation.navigate('Cart', { cart })}
                            color="#f4511e"
                        />
                    </View>
                }
                BadgeElement={
                    <Text style={{ color: '#FFFFFF' }}>{cart.length}</Text>
                }
                IconBadgeStyle={
                    {
                        width: 30,
                        height: 30,
                        backgroundColor: '#09f'
                    }
                }
                Hidden={cart.length == 0}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 330,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: '#f4511e',
        alignSelf: 'center',
        fontSize: 20,
        flexGrow: 3,
    },
    cart: {
    }
})

export default Header;