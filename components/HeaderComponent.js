import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={styles.container}>
                    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        fontSize: 30,
        color: 'black',
        paddingLeft: 20,
        fontStyle: 'normal'
    }
});

export default Header;