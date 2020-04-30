import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../common/state';
import { newBoard } from '../redux/actions';


const Controls = ({ newBoard }) => {
    const [width, setWidth] = useState(DEFAULT_WIDTH);
    const [height, setHeight] = useState(DEFAULT_HEIGHT);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.column}></View>
                <View style={styles.column}>
                    <Input
                        placeholder="width"
                        leftIcon={{ type: 'font-awesome', name: 'arrows-h' }}
                        onChangeText={(width) => setWidth(width)}
                        containerStyle={styles.input}
                        inputStyle={styles.input}
                        value={width}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Input
                        placeholder="height"
                        leftIcon={{ type: 'font-awesome', name: 'arrows-v' }}
                        onChangeText={(height) => setHeight(height)}
                        containerStyle={styles.input}
                        inputStyle={styles.input}
                        value={height}
                    />
                </View>
                <View style={styles.column}>
                    <Button buttonStyle={styles.button} type="solid"
                        onPress={() => newBoard(width, height)}
                        title="New Game"
                        icon={<Icon name='play-circle-o' size={25} color="white" />}
                    />
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: 10
    },
    input: {
        width: 100,
        marginRight: 10,
        alignContent:'center'
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#ccc',
        alignContent: 'center'
    }
});

export default connect(null, { newBoard })(Controls);