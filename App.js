import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput ,Appbar,Button} from 'react-native-paper';


import Displaylove from './components/Displaylove';

export default class App extends React.Component {

  state = {
    fname:'',
    sname:'',
    data:'loading',
    ss:'alok'
  }

  submitit()
  {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
    {
     headers:{
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "c1cad0f398msh0f18f5701c35785p160ac6jsnfe208dd326be"
      }
    })
    .then(data=>data.json())
    .then(data2=>{
      this.setState({data:data2})
      console.log(data2)
    })
    
  }



  render()
  {
    return (
      <View style={styles.container}>
      <Appbar.Header style={{backgroundColor:'#ff00c8'}}>

        <Appbar.Content style={{alignItems:"center"}}  title="Love CalC" />

      </Appbar.Header>

        <TextInput
        style={{marginTop:50}}
        label="Male"
        value={this.state.fname}
        onChangeText={fname => this.setState({fname})}
        />
        <Displaylove  data={this.state.data}/>
        
        
        <TextInput
        style={{marginTop:30}}
        label="FeMale"
        value={this.state.sname}
        onChangeText={sname => this.setState({sname})}
        />
        

       <Button style={{margin:30,backgroundColor:"#ff00c8"}} icon="heart" mode="contained"
         onPress={this.submitit.bind(this)}>
          Calculate
        </Button>

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
