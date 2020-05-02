import React from 'react';
import { View, Text } from 'react-native';
import { Emitter } from 'react-native-particles';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
 
const mapStateToProps = state => {
    return {
        gameOver: state.gameOver
    }
}

const GameOver = (props) => {
    if (props.gameOver)
        return (
        <Emitter
            numberOfParticles={50}
            emissionRate={5}
            interval={200}
            particleLife={1500}
            direction={-90}
            spread={360}
            fromPosition={{ x: 150, y: 150 }}
            width={300}
            height={300}
        >
            <Text><FontAwesome5Icon name='spa' color='#0cbdee' size='10' /></Text>
        </Emitter>
        );
    else
        return (<View></View>);
};

export default connect(mapStateToProps)(GameOver);