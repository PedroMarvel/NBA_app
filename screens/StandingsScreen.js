import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class StandingsScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('EastScreen')}
        >
          <Text style={styles.textButton}>Conferência Leste</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('WestScreen')}
        >
          <Text style={styles.textButton}>Conferência Oeste</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('HomeScreen')}
        >
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({


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
