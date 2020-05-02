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
        const moodScoreStyle = (score) => {
            if (score < 0) return { color: '#f31313' };
            if (score < 50) return { color: '#f3d113' };
            if (score < 100) return { color: '#5ae298' };
            return { color: '#2089dc' };
        }
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    <Text style={{ fontWeight: 'bold' }}>Your mood score:{` `}</Text>
                    <Text style={moodScoreStyle(yourMoodScore)}>{yourMoodScore}</Text>
                </Text>
                <Text style={[styles.text, { fontStyle: 'italic' }]}>
                    {` `}[ <Text style={{ fontWeight: 'bold' }}>Worldwide: </Text>
                    <Text style={{ color: '#2089dc' }}>>100</Text> ]
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
            res[elem] = res[elem] + 10; // add a weight of 10 for the elements from mood
            return res;
        }, {});
        if (!yourElements[FIRE]) {
            yourElements[FIRE] = 0;
        }
        yourElements[FIRE] = yourElements[FIRE] + nonMoodsTileCounts;
        const yourElementsTotalScore = myMoods.map(() => 1).reduce(function (a, b) { return a + b; }, 0) * 10 + nonMoodsTileCounts;

        const elemText = (elem) => {
            let elemPercentage = 0;
            if (elem) elemPercentage = Math.ceil(elem * 100 / yourElementsTotalScore);
            if (elemPercentage < 10) return <Text style={{ color: '#f31313' }}>{elemPercentage}%</Text>
            if (elemPercentage < 15) return <Text style={{ color: '#f3d113' }}>{elemPercentage}%</Text>
            if (elemPercentage < 20) return <Text style={{ color: '#5ae298' }}>{elemPercentage}%</Text>
            if (elemPercentage < 30) return <Text style={{ color: '#2089dc' }}>{elemPercentage}%</Text>
            if (elemPercentage < 40) return <Text style={{ color: '#5ae298' }}>{elemPercentage}%</Text>
            if (elemPercentage < 50) return <Text style={{ color: '#f3d113' }}>{elemPercentage}%</Text>
            return <Text style={{ color: '#f31313' }}>{elemPercentage}%</Text>
        }
        return (
            <View style={styles.row}>
                <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>Your elements:</Text>
                    {` `}<FontistoIcon name='earth' />  {elemText(yourElements[EARTH])}
                    {` `}<FontAwesome5Icon name='water' /> {elemText(yourElements[WATER])}
                    {` `}<FontistoIcon name='fire' />  {elemText(yourElements[FIRE])}
                    {` `}<FontistoIcon name='meteor' />  {elemText(yourElements[AIR])}
                    {` `}<FontistoIcon name='atom' />  {elemText(yourElements[ETHER])}
                </Text>
            </View>
        );
    }
    const worldElements = (
        <View style={styles.row}>
            <Text style={[styles.text, { fontStyle: 'italic' }]}> [ <Text style={{ fontWeight: 'bold' }}>Worldwide:</Text>
                {` `}<FontistoIcon name='earth' />  <Text style={{ color: '#2089dc' }}>25%</Text>
                {` `}<FontAwesome5Icon name='water' />  <Text style={{ color: '#2089dc' }}>25%</Text>
                {` `}<FontistoIcon name='fire' />  <Text style={{ color: '#2089dc' }}>25%</Text>
                {` `}<FontistoIcon name='meteor' />  <Text style={{ color: '#2089dc' }}>25%</Text>
                {` `}<FontistoIcon name='atom' />  <Text style={{ color: '#2089dc' }}>25%</Text> ]
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