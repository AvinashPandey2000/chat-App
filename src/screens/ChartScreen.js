import React from 'react';
import { View,
   Text ,
   ImageBackground,
   StyleSheet,
   FlatList,
   SafeAreaView,
   KeyboardAvoidingView,
   StatusBar
  } from 'react-native';
import  bg from '../../assets/images/BG.png';
import message from '../../assets/data/messages.json'
import moment from 'moment';

export default function ChartScreen() {


  const Item = ({message}) => (

   
    <View style={[styles.container,
       {backgroundColor:message.user.id ==='u2' ? '#DCF8C5':'white' } ,
       {alignSelf:message.user.id ==='u2' ? 'flex-end':'flex-start' } 
    ]}>
      <Text style={styles.title}>{message.text}</Text>
      <Text style={styles.time}>{moment(message.createdAt).format('h:mm a')}</Text>
    </View>
  );

  return (
    <ImageBackground source={bg} style={styles.bg}>
    {/** */}
    <KeyboardAvoidingView>
    <FlatList
        data={message}
        renderItem={({item}) => <Item message={item} />}
        inverted
      />
     
      </KeyboardAvoidingView>
    </ImageBackground>
    
  );
}

const styles =StyleSheet.create({
  bg:{
    flex:1,
    marginTop: StatusBar.currentHeight || 0,
  },
  time:{
    color:'gray',
    alignSelf:'flex-end'
  },
  container:{
    margin:5,
    padding:10,
    borderRadius:10,
    maxWidth:'80%',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
  
  }
})