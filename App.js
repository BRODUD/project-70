import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
export default class App extends React.Component {
  render(){
  return (
     <AppContainer/>
  );
}}

const TabNavigator =  createMaterialBottomTabNavigator(

  {
    Read:{
      screen: ReadStoryScreen,
      navigationOptions: {
        tabBarLabel: 'Read Story',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor, marginRight: 0 }]}
              size={22}
              name={'book-reader'}
              type="font-awesome-5"
            />
          </View>
        ),
      }
    },
      Write: {
        screen: WriteStoryScreen,
        navigationOptions: {
          tabBarLabel: 'Write Story',
          tabBarIcon: ({ tintColor }) => (
            <View>
              <Icon
                style={[{ color: tintColor, }]}
                size={22}
                name={'pencil-alt'} 
                type="font-awesome-5"
              />
            </View>
          ),  
      }
    },
  },
)

const AppContainer = createAppContainer(TabNavigator)
