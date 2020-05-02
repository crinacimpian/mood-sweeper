import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>I'm just a witness of all that happens.</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>When? Right now!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flex: 0.3,
        flexDirection: 'column'
        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'flex-start'
    },
    text: {
        fontSize: 16,
        color: '#1c2833',
        fontStyle: 'italic',
        alignSelf: 'center'
    }
});

export default Header;