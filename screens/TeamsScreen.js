import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../database';

export default class TeamsScreen extends Component {

  constructor(){
    super();
    this.pesquisa = {
      text:'',
      isSearchPressed: false,
      nome:'',
      titulos:'',
      lugar:'',
      idolo:''
      
    }
  }

  getWord=(pesquisa)=>{
    pesquisa = pesquisa.toLowerCase();
    try{
    
    var nome = db[pesquisa]['nome'];
    var titulos = db[pesquisa]['titulos'];
    var lugar = db[pesquisa]['lugar'];
    var idolo = db[pesquisa]['idolo'];

    this.setPesquisa({
      nome: nome,
      titulos: titulos,
      lugar:lugar,
      idolo:idolo,
      }); 
    
    }
    catch(error){
      alert('Esse time não foi encontrado ou ainda não está disponível');
      this.setPesquisa({
        nome:'',
        isSearchPressed: false,

      });
    }
  }

  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.titleText}>Encontre seu Time</Text>

        <TextInput style={styles.inputBox} />

        <TouchableOpacity style={styles.searchButtom}>
          <Text style={styles.seacrhText}>Pesquisar</Text>
        </TouchableOpacity>

        <View style={styles.dbView}>
          <Text style={styles.dbText}>Nome completo:</Text>
          <Text style={styles.dbText}>{this.pesquisa.nome}</Text>
        </View>
        <View style={styles.dbView}>
          <Text style={styles.dbText}>Títulos:</Text>
          <Text style={styles.dbText}>{this.pesquisa.titulos}</Text>
        </View>
        <View style={styles.dbView}>
          <Text style={styles.dbText}>Lugar:</Text>
          <Text style={styles.dbText}>{this.pesquisa.lugar}</Text>
        </View>
        <View style={styles.dbView}>
          <Text style={styles.dbText}>Maior(es) ídolos:</Text>
          <Text style={styles.dbText}>{this.pesquisa.idolo}</Text>
        </View>

        <TouchableOpacity
          style={styles.rectButton}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={styles.textButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 20,
  },

  inputBox: {
    borderWidth: 4,
    width: '50%',
    height: 40,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 60,
  },

  searchButtom: {
    width: '30%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 3,
    marginBottom: 30,
  },

  seacrhText: {
    fontSize:18,
  },

  dbText:{
    fontSize:18,
    marginLeft:20,
    marginRight:20, 
  },

  rectButton: {
    width: '95%',
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 3,
    marginBottom: 15,
  },

  textButton: {
    fontSize: 18,
  },

  dbView:{
    marginTop:30,
  }
});
