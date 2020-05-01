

import React from 'react';
import {StyleSheet,ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Description = () => {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={1000} delay={500}>
        <Card
          title='Mood Sweeper Game Description'  style={styles.titleText}>
            <Icon name='spa' color='black' size='20' />
          <Text  style={styles.descriptionText}>Todo...</Text>
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