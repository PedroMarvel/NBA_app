import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class GamesScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>07/06/2023 - 21:30</Text>
          <Text style={styles.textPlacar}>Heat   x   Nuggets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>09/06/2023 - 21:00</Text>
          <Text style={styles.textPlacar}>Heat   x   Nuggets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>12/06/2023 - 21:30</Text>
          <Text style={styles.textPlacar}>Heat   x   Nuggets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>15/06/2023 - 21:30</Text>
          <Text style={styles.textPlacar}>Heat   x   Nuggets</Text>
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
  borda:{
    borderColor:'blue',
    borderWidth:3,
    borderRadius:10,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    padding:10,

  },
  textData:{
    textAlign:'center',
  },
  textPlacar:{
    textAlign:'center',
    fontSize:20,
    paddingTop:10,
    paddingBottom:10,
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
