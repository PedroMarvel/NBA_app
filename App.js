import * as React from 'react';
import { View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import StandingsScreen from './screens/StandingsScreen';
import GamesScreen from './screens/GamesScreen';
import HighlightsScreen from './screens/HighlightsScreen';
import PlayersScreen from './screens/PlayersScreen';
import EastScreen from './screens/EastScreen';
import WestScreen from './screens/WestScreen';
import PhrasesScreen from './screens/PhrasesScreen';
import QuizScreen from './screens/QuizScreen';
import TeamsScreen from './screens/TeamsScreen';



export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
        
      </View>
    );
  }
}

var AppNavigator= createSwitchNavigator({
  HomeScreen: HomeScreen,
  StandingsScreen: StandingsScreen,
  GamesScreen: GamesScreen,
  HighlightsScreen: HighlightsScreen,
  PlayersScreen: PlayersScreen,
  EastScreen: EastScreen,
  WestScreen: WestScreen,
  PhrasesScreen: PhrasesScreen,
  QuizScreen: QuizScreen,
  TeamsScreen: TeamsScreen

});

const AppContainer = createAppContainer(AppNavigator);
