import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class EastScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <Text style={styles.tituloInicial}>Tabela Conferência Leste</Text>
        <View>
          <Text style={styles.bordaBucks}>1º  Bucks   58  24</Text>
          <Text style={styles.bordaCeltics}>2º  Celtics   57  25</Text>
          <Text style={styles.borda76ers}>3º  76ers   54  28</Text>
          <Text style={styles.bordaCavaliers}>4º  Cavaliers   51  31</Text>
          <Text style={styles.bordaKnicks}>5º  Knicks   47  35</Text>
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
    marginBottom:30,
  },

  bordaBucks:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#135C04',
    color:'#135C04'

  },

  bordaCeltics:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'green',
    color:'green'

  },

  borda76ers:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#0C71CA',
    color:'#0C71CA'

  },

  bordaCavaliers:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:10,
    borderRadius:8,
    borderWidth:2,
    paddingTop:7,
    paddingBottom:7,
    paddingLeft:45,
    padding:45,
    borderColor:'#880808',
    color:'#880808'

  },

  bordaKnicks:{
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

