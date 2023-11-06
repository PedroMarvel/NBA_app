import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('StandingsScreen')}
        >
          <Text style={styles.textButton}>Classificação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton1}
          onPress={()=>this.props.navigation.navigate('HighlightsScreen')}
        >
          <Text style={styles.textButton}>Jogos anteriores</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton2}
          onPress={()=>this.props.navigation.navigate('GamesScreen')}
        >
          <Text style={styles.textButton}>Próximos Jogos</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('PlayersScreen')}
        >
          <Text style={styles.textButton}>Melhores Jogadores</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton1}
          onPress={()=>this.props.navigation.navigate('TeamsScreen')}
        >
          <Text style={styles.textButton}>Times</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton2}
          onPress={()=>this.props.navigation.navigate('QuizScreen')}
        >
          <Text style={styles.textButton}>Quiz NBA</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('PhrasesScreen')}
        >
          <Text style={styles.textButton}>Melhores Narrações</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  squareButton1:{
    width:120,
    height:120,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginTop:15,
    borderRadius:10,
    borderWidth:3,
    marginBottom:15,
    marginLeft:30
  },
  
  squareButton2:{
    width:120,
    height:120,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    marginTop:-135,
    borderRadius:10,
    borderWidth:3,
    marginBottom:15,
    marginLeft:180
  },

  rectButton:{
    width:'95%',
    height:50,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:15,
    borderRadius:10,
    borderWidth:3,
    marginBottom:15
  },

  textButton:{
    fontSize:18
  }
});
