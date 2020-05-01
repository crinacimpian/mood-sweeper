

import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { MOODS, EARTH, WATER, AIR, FIRE, ETHER } from '../common/moods';

const MoodChoices = (props) => {
  const MoodButtonsPos = () => Array.from(MOODS.values()).filter(mood => mood.happinessScore > 0).map((mood) =>
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Button type="clear"
        onPress={() => props._chooseMood(mood)}
        icon={<Icon name={mood.icon} color={mood.color} />}
        title={mood.mood}
        iconRight
      />
    </View>
  );
  const MoodButtonsNeg = () => Array.from(MOODS.values()).filter(mood => mood.happinessScore < 0).map((mood) =>
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      <Button type="clear"
        onPress={() => props._chooseMood(mood)}
        icon={<Icon name={mood.icon} color={mood.color} />}
        title={mood.mood} titleStyle={{ color: '#f31313' }}
      />
    </View>
  );
  const _elementIcon = (mood) => {
    switch (mood.element) {
      case EARTH: return <FontistoIcon name='earth' />
      case WATER: return <FontAwesome5Icon name='water' />
      case FIRE: return <FontistoIcon name='fire' />
      case AIR: return <FontistoIcon name='meteor' />
      case ETHER: return <FontistoIcon name='atom' />
    }
  }
  const MoodElements = () => Array.from(MOODS.values()).filter(mood => mood.happinessScore > 0).map((mood) =>
    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      {_elementIcon(mood)}
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.modal}>
        <Text style={styles.modalTitle}>{`           `}How do you feel now?{`           `}</Text>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={{ flexDirection: 'column', flex: 1, marginLeft: 10  }}>
            <MoodButtonsPos />
          </View>
          <View style={{ flexDirection: 'column', flex: 0.3, alignItems: 'center' }}>
            <MoodElements />
          </View>
          <View style={{ flexDirection: 'column', flex: 1  }}>
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
    flex: 1
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#2089dc',
    textAlign: 'center',
    color: 'white',
    padding: 5
  },
  titleStyle: {
    fontSize: 12
  }
});

export default MoodChoices;