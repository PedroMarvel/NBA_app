import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class PlayersScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>

        <View>
          <Text style={styles.textName}>LeBron James</Text>
          <Image source={require('../Images/LeBron.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Los Angeles Lakers</Text>
          <Text style={styles.description}>Idade: 38 anos</Text>
          <Text style={styles.description}>Títulos: 4 </Text>
        </View>

        <View>
          <Text style={styles.textName}>Luka Dončić</Text>
          <Image source={require('../Images/Luka.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Dallas Mavericks</Text>
          <Text style={styles.description}>Idade: 24 anos</Text>
          <Text style={styles.description}>Títulos: -- </Text>
        </View>

        <View>
          <Text style={styles.textName}>Stephen Curry</Text>
          <Image source={require('../Images/Curry.png')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Golden State Warriors</Text>
          <Text style={styles.description}>Idade: 35 anos</Text>
          <Text style={styles.description}>Títulos: 4 </Text>
        </View>

        <View>
          <Text style={styles.textName}>Kyrie Irving</Text>
          <Image source={require('../Images/Irving.png')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Dallas Mavericks</Text>
          <Text style={styles.description}>Idade: 31 anos</Text>
          <Text style={styles.description}>Títulos: 1 </Text>
        </View>

        <View>
          <Text style={styles.textName}>Giannis Antetokounmpo</Text>
          <Image source={require('../Images/Giannis.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Milwaukee Bucks</Text>
          <Text style={styles.description}>Idade: 28 anos</Text>
          <Text style={styles.description}>Títulos: 1 </Text>
        </View>

        <View>
          <Text style={styles.textName}>Jimmy Butler</Text>
          <Image source={require('../Images/Jimmy.png')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Miami Heat</Text>
          <Text style={styles.description}>Idade: 33 anos</Text>
          <Text style={styles.description}>Títulos: -- </Text>
        </View>

        <View>
          <Text style={styles.textName}>Jayson Tatum</Text>
          <Image source={require('../Images/Tatum.png')} style={styles.playerImage}></Image>
          <Text style={styles.description}>Time atual: Boston Celtics</Text>
          <Text style={styles.description}>Idade: 25 anos</Text>
          <Text style={styles.description}>Títulos: -- </Text>
        </View>

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
   textName:{
     fontSize:30,
     textAlign:'center',
     marginTop:50,
   },
   playerImage:{
     resizeMode:'contain',
     height:250,
     width:250,
     alignSelf:'center'
   },
  description:{
    marginLeft:10,
    fontSize:20,
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
