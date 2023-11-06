import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class EastScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.tituloInicial}>Tabela Conferência Oeste</Text>
        <View>
          <Text style={styles.bordaNuggets}>1º  Nuggets   53  29</Text>
          <Text style={styles.bordaGrizzlies}>2º  Grizzlies   51  31</Text>
          <Text style={styles.bordaKings}>3º  Kings   48  34</Text>
          <Text style={styles.bordaSuns}>4º  Suns   45  37</Text>
          <Text style={styles.bordaClippers}>5º  Clippers   44  38</Text>
        </View>
        <TouchableOpacity style={styles.rectButton}
          onPress={()=>this.props.navigation.navigate('StandingsScreen')}
        >
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  tituloInicial:{
    alignSelf:'center',
    marginTop:15,
    fontSize:25,
    color:'blue',
    fontWeight:'bold',
    marginBottom:30
  },

  bordaNuggets:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#020B36',
    color:'#020B36'

  },

  bordaGrizzlies:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#293FAD',
    color:'#293FAD'

  },

  bordaKings:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#352178',
    color:'#352178'

  },

  bordaSuns:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#FF7C01',
    color:'#FF7C01'

  },

  bordaClippers:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'black',
    color:'black'

  },

  rectButton:{
    width:'95%',
    height:50,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:70,
    borderRadius:10,
    borderWidth:3,
    marginBottom:15
  },

  textButton:{
    fontSize:18
  }
});


