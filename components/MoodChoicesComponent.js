

import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { MOODS } from '../common/moods';

const MoodChoices = (props) => {
  const MoodButtonsPos = () => Array.from(MOODS.values()).filter(mood => mood.happinessScore > 0).map((mood) =>
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
      <Button type="clear"
        onPress={() => props._chooseMood(mood.mood)}
        icon={<Icon name={mood.icon} color={mood.color} />}
        title={mood.mood}
        iconRight
      />
    </View>
  );
  const MoodButtonsNeg = () => Array.from(MOODS.values()).filter(mood => mood.happinessScore < 0).map((mood) =>
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start' }}>
      <Button type="clear"
        onPress={() => props._chooseMood(mood.mood)}
        icon={<Icon name={mood.icon} color={mood.color} />}
        title={mood.mood} titleStyle={{color: '#f31313'}}
      />
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>How or what do you feel now?{`    `}</Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flexDirection: 'column', flex: 1, marginLeft:10 }}>
            <MoodButtonsPos />
          </View>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <MoodButtonsNeg />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: '#fff',
    flex:1
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    backgroundColor: '#2089dc',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
    padding: 5
  }
});

export default MoodChoices;