import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Displaylove =(props)=>{

    if(props.data=='loading')
    {
        return <Text style={{fontSize:30,marginLeft:90}}>Hold A Second</Text>
    }
    else{
        return(
            <View style={{marginTop:30, alignItems:"center"}}>
                <Text style={{fontSize:30}}>{props.data.percentage}%</Text>
                <Text style={{fontSize:20}}>{props.data.result}</Text>
            </View>
        )
    }
    
}

export default Displaylove;