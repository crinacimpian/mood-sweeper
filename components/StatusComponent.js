import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { MOODS, EARTH, WATER, AIR, FIRE, ETHER } from '../common/moods';


const mapStateToProps = state => {
    return {
        board: state.board,
        moods: state.moods,
    }
}

const Status = (props) => {
    const board = props.board.board;
    const myMoods = props.moods;
    const nonMoodsTileCounts = board.openedNonBombs;

    const remainingTiles = () => {
        if (!board.isComplete())
            return (<View style={styles.row}><Text style={styles.text}>
                <Text style={{ fontWeight: 'bold' }}>Choices: </Text> {board.remainingTiles}</Text></View>);
    }
    const moodScore = () => {
        const yourMoodScore = myMoods.map(mood => MOODS.get(mood).happinessScore).reduce(function (a, b) {
            return a + b;
        }, 0) * 10 + nonMoodsTileCounts;
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>Your mood score:</Text> {yourMoodScore}
                </Text>
                <Text style={[styles.text, { fontStyle: 'italic' }]}>
                    [ <Text style={{ fontWeight: 'bold' }}>Worldwide : </Text> ? ]
                </Text>
            </View>
        );
    }
    const dominantElement = () => {
        const yourElements = myMoods.reduce(function (res, value) {
            let elem = MOODS.get(value).element
            if (!res[elem]) {
                res[elem] = 0;
            }
            res[elem]=res[elem]+10; // add a weight of 10 for the elements from mood
            return res;
        }, {});
        console.log(yourElements)
        console.log(yourElements[FIRE])
        console.log(nonMoodsTileCounts)
        if (!yourElements[FIRE]) {
            yourElements[FIRE] = 0;
        }
        yourElements[FIRE] = yourElements[FIRE] + nonMoodsTileCounts;
        const yourElementsTotalScore =myMoods.map(() => 1).reduce(function (a, b) {return a + b;}, 0)*10 + nonMoodsTileCounts;
        console.log(yourElements)
        console.log(yourElementsTotalScore)
        console.log(nonMoodsTileCounts)
        const elemPercentage = (elem) => {
            if (elem) return Math.ceil(elem * 100 / yourElementsTotalScore);
            else return 0;
        }

        return (
            <View style={styles.row}>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Your elements:</Text>
                {` `}<FontistoIcon name='earth' />  {elemPercentage(yourElements[EARTH])}%
                {` `}<FontAwesome5Icon name='water' /> {elemPercentage(yourElements[WATER])}%
                {` `}<FontistoIcon name='fire' />  {elemPercentage(yourElements[FIRE])}%
                {` `}<FontistoIcon name='meteor' />  {elemPercentage(yourElements[AIR])}%
                {` `}<FontistoIcon name='atom' />  {elemPercentage(yourElements[ETHER])}%
                </Text>
            </View>
        );
    }
    const worldElements = (
        <View style={styles.row}>
            <Text style={[styles.text, { fontStyle: 'italic' }]}> [ <Text style={{ fontWeight: 'bold' }}>Worldwide:</Text>
                {` `}<FontistoIcon name='earth' />  25%
                {` `}<FontAwesome5Icon name='water' />  25%
                {` `}<FontistoIcon name='fire' />  25%
                {` `}<FontistoIcon name='meteor' />  25%
                {` `}<FontistoIcon name='atom' />  25% ]
            </Text>
        </View>);

    return (
        <View style={styles.container}>
            {remainingTiles()}
            {moodScore()}

            {dominantElement()}
            {worldElements}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 10
    },
    row: {
        flex: 0.15,
        flexDirection: 'row',
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 12,
        color: 'black',
        fontStyle: 'normal'
    }
});

export default connect(mapStateToProps)(Status);