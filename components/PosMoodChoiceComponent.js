

import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { EARTH, WATER, AIR, FIRE, ETHER } from '../common/moods';

const PosMoodChoice = (props) => {
  const mood = props.mood;
  console.log(mood);
  const _elementIcon = () => {
    switch (mood.element) {
      case EARTH: return <FontistoIcon name='earth' size='20' />
      case WATER: return <FontAwesome5Icon name='water' size='20' />
      case FIRE: return <FontistoIcon name='fire' size='20' />
      case AIR: return <FontistoIcon name='meteor' size='20' />
      case ETHER: return <FontistoIcon name='atom' size='20' />
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.modal}>
        <View style={styles.title}>
          <View style={{ flexDirection: 'column', flex: 0.3, marginLeft: 20 }}>
            <Icon name={mood.icon} color='black' size='20' />
          </View>
          <View style={{ flexDirection: 'column', flex: 1 }}>
            <Text style={styles.titleText}>{mood.mood}</Text>
          </View>
          <View style={{ flexDirection: 'column', flex: 0.3, marginRight: 5 }}>
            {_elementIcon()}
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{mood.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 0.3, justifyContent: 'flex-end', alignItems: 'center' }}>
          <Button type="clear"
            onPress={() => props._completedPosMood(mood)}
            icon={<Icon name={mood.icon} color={mood.color} />}
            title={mood.mood} titleStyle={styles.titleStyle}
            iconRight
          />
        </View>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    margin: 50,
    backgroundColor: '#fff',
    flex: 1
  },
  title: {
    flexDirection: 'row', 
    flex: 0.3, 
    justifyContent: 'center', 
    alignItems: 'center' ,
    backgroundColor: '#2089dc'
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  description: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center', 
    marginLeft: 20,
    marginRight: 20
  },
  descriptionText: {
    fontSize: 12
  },
  titleStyle: {
    fontSize: 12
  }
});

export default PosMoodChoice;