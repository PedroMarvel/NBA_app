import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class QuizScreen extends Component {
  constructor(){
    super();
    this.state={
      valor:0
    }
  }
  aumentar=()=>{
    this.setState({valor:this.state.valor + 1});
  }
  diminuir=()=>{
    this.setState({valor:this.state.valor - 1});
  }

  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.textTitle}>Quantos Títulos eles tem?</Text>

        <View>
          <Text style={styles.textName}>Larry Bird</Text>
          <Image source={require('../Images/Bird.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textName}>Magic Johnson</Text>
          <Image source={require('../Images/Magic.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textName}>Michael Jordan</Text>
          <Image source={require('../Images/Jordan.png')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textName}>Bill Russel</Text>
          <Image source={require('../Images/Bill.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textName}>Kareem Abdul-Jabbar</Text>
          <Image source={require('../Images/Kareem.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textName}>Shaquille O'Neal </Text>
          <Image source={require('../Images/Shaq.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
        </View>

        <View>
          <Text style={styles.textName}>Kobe Bryant</Text>
          <Image source={require('../Images/Kobe.webp')} style={styles.playerImage}></Image>
          <Text style={styles.description}>{this.state.valor}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={this.aumentar}>+</TouchableOpacity>
          <TouchableOpacity style={styles.minosButton} onPress={this.diminuir}>-</TouchableOpacity>
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
   textTitle:{
     fontSize:50,
     textAlign:'center',
     marginTop:50,
   },





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
    textAlign:'center',
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
  },

  plusButton:{
    fontSize:40,
    fontWeight:'bold',
    marginLeft:100
  },

  minosButton:{
    fontSize:60,
    marginTop:-62,
    marginLeft:200
  }


});