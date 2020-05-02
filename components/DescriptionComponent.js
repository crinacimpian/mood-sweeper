

import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Description = () => {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={1000} delay={500}>
        <Card
          title='Mood Sweeper Game Description' style={styles.titleText}>
          <FontAwesome5Icon name='spa' color='black' size='20' />
          <Text style={styles.descriptionText}>{`
          This game is a twist of the MineSweeper game. 

          Today we deal with our emotions, moods.
          When a mood arises, the mood corresponds to one of 
          the five elements:
          `}
        {`  `}<FontistoIcon name='earth' />  earth,
        {` `}<FontAwesome5Icon name='water' />  water,
        {` `}<FontistoIcon name='fire' />  fire,
        {` `}<FontistoIcon name='meteor' />  air and
        {` `}<FontistoIcon name='atom' />  ether
          {`
          And reverse, when one of the five elements is dominant, 
          it causes restless in the corresponding mood.
          
          Your score is calculated based on your choices. 
          Each non-mood tile have a weight of 1.
          It corresponds with the `}
          <FontistoIcon name='fire' /> 
          {` 'Fire' element
          (Alertness or Feverishness).
          The actual moods have a weight of 10 for positive
          moods and a weight of -10 for negative moods.
          
          When you choose a positive mood, an action is required
          to help that mood. Choose it and you'll find out.
          
          Enjoy the experience!
          `} </Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  descriptionText: {
    fontSize: 12,
    color: 'black'
  }
});

export default Description;