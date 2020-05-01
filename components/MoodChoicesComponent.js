

import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {MOODS} from '../common/moods';

const MoodChoices = (props) => {
  const MoodButtons = () => Array.from(MOODS.values()).map((mood) => 
        <Button type="clear"
        onPress={() => props._chooseMood(mood.mood)}
        icon={<Icon name={mood.icon} color={mood.color} />}
        title={mood.mood}
      />
  );
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
    <View style={styles.modal}>
      <Text style={styles.modalTitle}>How do you feel now?</Text>
      <View style={{ flexDirection: 'column' }}>
        <MoodButtons />
      </View>
    </View>
  </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#fff'
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: '#0cbdee',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    padding: 5
  }
});

export default MoodChoices;