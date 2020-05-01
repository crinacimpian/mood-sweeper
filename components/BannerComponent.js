import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>I'm just a witness of all that happens.</Text>
            <Text style={styles.text}>When? Right now!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flex: 0.2,
        flexDirection: 'column'
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic',
        alignSelf: 'center'
    }
});

export default Header;