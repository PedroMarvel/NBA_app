import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HighlightsScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>23/05/2023</Text>
          <Text style={styles.textPlacar}>Heat  99  x  116  Celtics</Text>
          <Text  style={styles.textLink}  onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=wfRz1f6SujE')}}>Melhores momentos aqui!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>25/05/2023</Text>
          <Text style={styles.textPlacar}>Heat  97  x  110  Celtics</Text>
          <Text  style={styles.textLink}  onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=giAJisigL7k')}}>Melhores momentos aqui!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda}>
          <Text style={styles.textData}>27/05/2023</Text>
          <Text style={styles.textPlacar}>Heat  103  x  104  Celtics</Text>
          <Text  style={styles.textLink}  onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=z-8KaZNJS5A')}}>Melhores momentos aqui!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda2}>
          <Text style={styles.textData}>29/05/2023</Text>
          <Text style={styles.textPlacar}>Heat  103  x  84  Celtics</Text>
          <Text  style={styles.textLink}  onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=wfRz1f6SujE')}}>Melhores momentos aqui!!!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.borda3}>
          <Text style={styles.textData}>01/06/2023</Text>
          <Text style={styles.textPlacar}>Heat  93  x  104  Nuggets</Text>
          <Text  style={styles.textLink}  onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=wfRz1f6SujE')}}>Melhores momentos aqui!!!</Text>
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
    borderColor:'green',
    borderWidth:3,
    borderRadius:10,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    padding:10,

  },
  borda2:{
    borderColor:'red',
    borderWidth:3,
    borderRadius:10,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    padding:10,

  },
  borda3:{
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
  textLink:{
    textAlign:'center',
    color:'blue',
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