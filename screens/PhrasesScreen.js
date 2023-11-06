import React, {Component} from 'react';
import {View,TouchableOpacity,StyleSheet,Text} from 'react-native';
import {Audio} from 'expo-av';

import AppHeader from '../components/AppHeader';

export default class PhrasesScreen extends Component{

  playSound1 = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  playSound2 = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  playSound3 = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  playSound4 = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  playSound5 = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  playSound6 = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    );
  }

  render(){
    return(
      <View>
        <AppHeader/>
      
        <TouchableOpacity style={styles.rectButton}
          onPress={this.playSound1}
        >
          <Text style={styles.textButton}>Booom Boom Boom Shakalaka</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectButton}
          onPress={this.playSound2}
        >
          <Text style={styles.textButton}>Frase 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectButton}
          onPress={this.playSound3}
        >
          <Text style={styles.textButton}>Frase 3</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectButton}
          onPress={this.playSound4}
        >
          <Text style={styles.textButton}>Frase 4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectButton}
          onPress={this.playSound5}
        >
          <Text style={styles.textButton}>Frase 5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectButton}
          onPress={this.playSound6}
        >
          <Text style={styles.textButton}>Frase 6</Text>
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