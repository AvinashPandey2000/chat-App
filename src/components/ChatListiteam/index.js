import {
  Text,
  View,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Pressable,
} from "react-native";
import Svg, { Path } from 'react-native-svg';
import chats from '../../../assets/data/chats.json'
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";

const ChatListiteam = () => {
  const navigation =useNavigation();
  const DATA = [
    {
      id: 'bd7acbea-c11-46c2-aed5-3ad53abb28ba',
      name: 'Avinash',
      src: 'https://picsum.photos/200/300'
    },
    {
      id: 'bd7acbea-c11-46c2-aed5-3ad53abb28ba',
      name: 'Avinash',
      src: 'https://picsum.photos/200/300'
    },
    {
      id: 'bd7acbea-c11-46c2-aed5-3ad53abb28ba',
      name: 'Avinash',
      src: 'https://picsum.photos/200/300'
    },


  ];

  const Item = ({ name, src }) => (
    <View style={styles.item}>
      <Image
        source={{ uri: src }}
        style={styles.recentImage}
      />
      <Text style={styles.recentName}>{name}</Text>
    </View>
  );


  // chat list
  const CHAT = [
    {
      id: 'bd7acbeda-c1b1-46c2-aed5-3a53abb28ba',
      src: 'https://picsum.photos/200/300',
      name: 'Avinash Pandey',
      time: '8:25',
      discription: 'Hello raj Hello rajHello rajHello rajHello rajHellHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajo rajHello rajHello raj',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53bbd28ba',
      src: 'https://picsum.photos/200/300',
      name: 'Avinash Pandey',
      time: '8:25',
      discription: 'Hello raj Hello rajHello rajHello rajHello rajHellHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajo rajHello rajHello raj',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
      src: 'https://picsum.photos/200/300',
      name: 'Avinash Pandey',
      time: '8:25',
      discription: 'Hello raj Hello rajHello rajHello rajHello rajHellHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajo rajHello rajHello raj',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3add53abb28ba',
      src: 'https://picsum.photos/200/300',
      name: 'Avinash Pandey',
      time: '8:25',
      discription: 'Hello raj Hello rajHello rajHello rajHello rajHellHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajHello rajo rajHello rajHello raj',
    },


  ];
  const Chat = ({ name, src, time, discription,id }) => (
    <Pressable onPress={() => navigation.navigate('ChatScreenContainer',{
      id:id,name:name
    })}>
    <View style={styles.chatContainer}>
      <Image
        source={{ uri: src }}
        style={styles.image}
      />
      <View style={styles.chatInnerContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.discription}>{moment(time).format('h:mm a')}</Text>
        </View>

        <Text numberOfLines={1} style={styles.discription}>{discription}</Text>
      </View>

    </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1B202D' }} edges={['bottom']}>
      <KeyboardAvoidingView >
        {/** header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Messages</Text>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={styles.HeaderImage}
          />

        </View>

        {/** Recent List */}
        <View style={styles.recentContainer}>
          <Text style={styles.recentHeading}>RECENTS</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item name={item.name} src={item.src} />}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>

        {/** chat Container */}

        <View style={styles.bodyContainer}>

          <FlatList
            data={chats}
            renderItem={({ item }) => <Chat
              src={item.user.image}
              name={item.user.name}
              time={item.lastMessage.createdAt}
              discription={item.lastMessage.text}
              id={item.id}
               />}
          />


        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatListiteam;

const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center"
  },
  heading: {
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 42,
    color: '#FFFFFF'
  },
  HeaderImage: {
    width: 30,
    height: 30,
  },

  // Recent section
  recentContainer: {
    marginHorizontal: 20,
    marginTop: 9
  },
  recentHeading: {
    fontWeight: 500,
    fontSize: 15,
    lineHeight: 19,
    color: 'rgba(255, 255, 255, 0.58)',
    letterSpacing: 5,
    marginBottom: 10
  },
  recentImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  item: {
    marginHorizontal: 15,
    // textAlign:"center"
  },
  recentName: {
    color: '#ffff',
    textAlign: "center",
    marginTop: 9
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 26
  },
  // body container
  bodyContainer: {
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    // borderWidth:0.5,
    backgroundColor: '#292F3F',
    marginTop: 30

  },
  chatContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  chatInnerContainer: {
    flex: 1,
    justifyContent: "space-around"
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 22,
    color: '#FFFF',
  },
  discription: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 21,
    color: '#B3B9C9',
    marginRight: 20
  },

})
