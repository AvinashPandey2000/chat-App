import { View, TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {AntDesign,FontAwesome,Feather } from '@expo/vector-icons';
export default function InputBox() {
  const [message,setMessage]= useState('')
  const onSend=()=>{
    console.log('message send',message);
    setMessage('')
  }
  return (
    <View style={styles.container}>
      {/**icon */}
    <AntDesign name='plus' size={16} color='royalbluew' style={styles.plus}/>
      {/**input container */}
      <TextInput 
      value={message} 
      onChangeText={setMessage} 
      placeholder='Enter Your Message...'
      style={styles.Input}
      />
      {/**icon */}
      <FontAwesome onPress={onSend} name="send" size={16} color="white" backgroundColor='royalblue' style={styles.send}/>
          </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    height:70,
    alignItems:'center',
    borderColor:'whitesmoke'
  },
  plus:{
    margin:20
  },
  Input:{
    flex:1,
    borderWidth:StyleSheet.hairlineWidth,
borderColor:'lightgray',
alignItems:'center',
height:50,
borderRadius:10,
fontSize:16,
paddingLeft:10
  },
  send:{
    margin:20,
    overflow:'hidden',
    padding:7,
    borderRadius:10
  }
})