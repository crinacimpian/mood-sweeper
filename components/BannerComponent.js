import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>I'm just a witness of all that happens.</Text>
            <Text style={styles.text}>When? Right now!</Text>
            <Text style={styles.textSmall} onPress={() => Linking.openURL('https://www.artofliving.org/us-en/wisdom/ashtavakra-gita')}>
                >from Sri Sri Ravi Shankar's commentary on Ashtavakra Gita</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flex: 0.8,
        flexDirection: 'column'
    },
    text: {
        fontSize: 16,
        color: 'black',
        fontStyle: 'italic',
        alignSelf: 'center'
    },
    textSmall: {
        fontSize: 10,
        color: 'black',
        fontStyle: 'italic',
        alignSelf: 'flex-end',
    }
});

export default Header;