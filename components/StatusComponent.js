import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        board: state.board
    }
}

const Status = (props) => {
    const board = props.board.board;
    const remainingTiles = () => {
        if (!board.isComplete())
            return (<Text style={styles.text}>Remaining tiles: {board.remainingTiles}</Text>);
    }
    const gameStatus = () => {
        if (board.isComplete())
            return (<Text style={styles.text}>Game over: {board.state}</Text>);
    }
    return (
        <View style={styles.container}>
            {remainingTiles()}
            {gameStatus()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingHorizontal: 10,
        flex:1,
        flexDirection: 'row'
    },
    text: {
        fontSize: 16,
        color: 'black',
        padding: 5,
        fontStyle: 'normal'
    }
});

export default connect(mapStateToProps)(Status);