import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Description from './DescriptionComponent';
import Game from './GameComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const headerStyle = {
  headerStyle: {
    backgroundColor: "#2089dc"
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: "#fff"
  }
};

const HeaderNavigatorOptions = (props) => {
  return {
    headerLeft: ({ tintColor }) =>
      <View style={{ marginLeft: 5 }}>
        <Icon name="list" size={24} color={tintColor} onPress={() => props.navigation.toggleDrawer()} />
      </View>,
    headerRight: ({ tintColor }) =>
      <View style={{ marginRight: 5 }}>
        <FontAwesome5Icon name="spa" size={24} color={tintColor} />
      </View>
  }
}

const GameNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Game" component={Game} options={HeaderNavigatorOptions} />
    </Stack.Navigator>
  );
}

const DescriptionNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Description" component={Description} options={HeaderNavigatorOptions} />
    </Stack.Navigator>
  );
}

const ContactNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Contact" component={Contact} options={HeaderNavigatorOptions} />
    </Stack.Navigator>
  );
}

const AboutNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="About Us" component={About} options={HeaderNavigatorOptions} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }} {...props}>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Text style={styles.drawerHeaderText}>Mood Sweeper</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerStyle={{ backgroundColor: 'white', width: 180 }} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="GameNavigator" component={GameNavigator} options={{
        title: 'Game',
        drawerIcon: ({ tintColor }) => <FontAwesome5Icon name="spa" size={15} color={tintColor} />
      }}
      />
      <Drawer.Screen name="DescriptionNavigator" component={DescriptionNavigator} options={{
        title: 'Description',
        drawerIcon: ({ tintColor }) => <Icon name='file-text' type='feather' size={15} color={tintColor} />
      }} />
      <Drawer.Screen name="AboutNavigator" component={AboutNavigator} options={{
        title: 'About Us',
        drawerIcon: ({ tintColor }) => <Icon name="info-circle" size={15} color={tintColor} />
      }} />
      <Drawer.Screen name="ContactNavigator" component={ContactNavigator} options={{
        title: 'Contact',
        drawerIcon: ({ tintColor }) => <Icon name="address-card" size={15} color={tintColor} />
      }} />
    </Drawer.Navigator>
  );
}


class Main extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;