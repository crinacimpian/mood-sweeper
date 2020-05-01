import React, { useState } from 'react';
import { View, StyleSheet, Text, Linking } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../common/state';
import { newBoard, resetMoods } from '../redux/actions';


const Controls = ({ newBoard }) => {
    const [width, setWidth] = useState(DEFAULT_WIDTH);
    const [height, setHeight] = useState(DEFAULT_HEIGHT);



    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            {`
                This body is part of `}
                <FontistoIcon name='earth' />  earth,
                {` `}<FontAwesome5Icon name='water' />  water,
                {` `}<FontistoIcon name='fire' />  fire,{` 
                 `}<FontistoIcon name='meteor' />  air and
                {` `}<FontistoIcon name='atom' />  ether
                {`. And so the universe.
                The universe is just an expression of the Self.
                There is nothing to control.
                All it's happening in the Self, by the Self, for the Self.
                Right now you are FREE!
                `}
                <Text style={styles.textSmall}
                    onPress={() => Linking.openURL('https://www.artofliving.org/us-en/wisdom/ashtavakra-gita')}>
                    >from Sri Sri Ravi Shankar's commentary on Ashtavakra Gita{`
                    `}</Text>
            </Text>
            <Button buttonStyle={styles.button} type="solid"
                onPress={() => { newBoard(width, height); resetMoods(); }}
                title="Witness Again" titleStyle={styles.buttonTitle}
                icon={<Icon name='spa' size={20} color="white" />}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-end",
        flex: 1,
        flexDirection: 'column'
    },
    button: {
        alignContent: 'center',
        width: 150
    },
    buttonTitle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 12,
        color: 'black',
        fontSize: 14,
        fontStyle: 'italic'
    },
    textSmall: {
        fontSize: 10,
        color: 'black',
        fontStyle: 'italic',
        alignSelf: 'flex-end',
    }
});

export default connect(null, { newBoard, resetMoods })(Controls);