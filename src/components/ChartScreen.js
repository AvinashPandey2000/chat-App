import React, { useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';
import bg from '../../assets/images/BG.png';
import message from '../../assets/data/messages.json'
import moment from 'moment';
import { useRoute,useNavigation } from '@react-navigation/native';


export default function ChatScreen() {
  const route=useRoute();
 const navigation =useNavigation();

//header k name ko change kr ne k liye mutlab jis ki chate per jaoo vo open ho jaye
useEffect(()=>{
  navigation.setOptions({title:route.params.name})  
},[route.params.name])

  const Item = ({ message }) => (


    <View style={[styles.container,
    { backgroundColor: message.user.id === 'u2' ? '#DCF8C5' : 'white' },
    { alignSelf: message.user.id === 'u2' ? 'flex-end' : 'flex-start' }
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
          renderItem={({ item }) => <Item message={item} />}
          inverted
        />

      </KeyboardAvoidingView>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end'
  },
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
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