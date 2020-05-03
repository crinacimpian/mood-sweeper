import React from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { newBoard, resetMoods, setGameOver } from '../redux/actions';
import {DEFAULT_WIDTH, DEFAULT_HEIGHT} from '../common/state';


const Controls = ({ newBoard, resetMoods,  setGameOver}) => {
    const _resetGame = () => {
        newBoard(DEFAULT_WIDTH, DEFAULT_HEIGHT); 
        resetMoods();
        setGameOver(false);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                This body is part of {`\n`}
                <FontistoIcon name='earth' />  earth,
                {` `}<FontAwesome5Icon name='water' />  water,
                {` `}<FontistoIcon name='fire' />  fire,
                {` `}<FontistoIcon name='meteor' />  air and
                {` `}<FontistoIcon name='atom' />  ether.
                {`\n`}And so the universe.{`\n`}
                The universe is only an expression of the Self.{`\n`}
                There is nothing to control.{`\n`}
                All it's happening in the Self, by the Self, for the Self.{`\n`}
                You are FREE right now!{`\n`}
                <Text style={styles.textSmall}
                    onPress={() => Linking.openURL('https://www.artofliving.org/us-en/wisdom/ashtavakra-gita')}>
                    >from Sri Sri Ravi Shankar's commentary on Ashtavakra Gita</Text>
                    {`\n`}
            </Text>
            <Button buttonStyle={styles.button} type="solid"
                onPress={() => _resetGame()}
                title="Witness Again" titleStyle={styles.buttonTitle}
                icon={<Icon name='spa' size={20} color="#F5FCFF" />}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        marginLeft: 20
    },
    button: {
        marginTop: 5,
        alignContent: 'center'
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 5
    },
    text: {
        fontSize: 12,
        color: '#1c2833',
        fontSize: 14,
        fontStyle: 'italic'
    },
    textSmall: {
        fontSize: 10,
        color: '#1c2833',
        fontStyle: 'italic'
    }
});

export default connect(null, { newBoard, resetMoods, setGameOver })(Controls);