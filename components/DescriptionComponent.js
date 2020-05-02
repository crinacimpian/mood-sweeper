

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
          title='Mood Sweeper - Game Rules' style={styles.titleText}>
          <FontAwesome5Icon name='spa' color='#1c2833' size='20' />
          <Text style={styles.descriptionText}>
          This game is a twist of the MineSweeper game. 
          Bombs are replaced with the moods. 
          {`\n`}{`\n`}
          Today we deal with emotions, moods.
          When a mood arises, the mood raises one of 
          the five elements:{`\n`}
        {`  `}<FontistoIcon name='earth' />  earth,
        {` `}<FontAwesome5Icon name='water' />  water,
        {` `}<FontistoIcon name='fire' />  fire,
        {` `}<FontistoIcon name='meteor' />  air and
        {` `}<FontistoIcon name='atom' />  ether{`\n`}
          Conversely, when one of the five elements is dominant, 
          causes anxiety in the appropriate mood.
          {`\n`}{`\n`}
          Your score is calculated based on your choices. 
          Each non-mood tile (leaves and flowers) weighs 1 point.
          It is associated with
          {` `}<FontistoIcon name='fire' /> {` `}
          'Fire' element
          (Alertness or Feverishness).
          The actual mood weighs 10 for the positive moods
          and -10 for the negative moods.
          {`\n`}{`\n`}
          When you choose a positive mood, action is needed
          to help that mood. Take a moment to be in that mood.
          Choose it and you will find out.
          And more amazing experiences will come on the way. 
          {`\n`}{`\n`}
          Enjoy the experience!
          </Text>
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
    color: '#1c2833',
  },
  descriptionText: {
    fontSize: 12,
    color: '#1c2833'
  }
});

export default Description;