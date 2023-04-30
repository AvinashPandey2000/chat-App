import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotImplement from "../screens/NotImplement";
import ChatListiteam from "../components/ChatListiteam";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="ChatListiteam">
      <Tab.Screen
        name="Status"
        component={NotImplement}
        options={{
            title: 'Whatsapp',
            headerStyle: {
            //   backgroundColor: 'green',
              borderWidth:0
            },
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" size={size} color={color} />
          ),
          tabBarStyle: {
            borderTopRightRadius:40,
            borderTopLeftRadius:40,
            height:100
            
      },
      
        }}
        
      />
      <Tab.Screen
        name="Calls"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-sharp" size={size} color={color} />
          ),
          tabBarStyle: {
            borderTopRightRadius:40,
            borderTopLeftRadius:40,
            height:100
            
      }
        }}
      />
      <Tab.Screen
        name="Camera"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={size} color={color} />
          ),
          tabBarStyle: {
            borderTopRightRadius:40,
            borderTopLeftRadius:40,
            height:100
            
      }
        }}
      />
      <Tab.Screen
        name="ChatListiteam"
        component={ChatListiteam}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" size={size} color={color} />
          ),
          headerStyle: {
              // backgroundColor: '#292F3F',
            //   color:'#FFFF'
            },
            // headerTintColor: '#FFFF',
          tabBarStyle: {
            borderTopWidth: 0,

            // borderTopRightRadius:40,
            // borderTopLeftRadius:40,
           
            height:100,
            backgroundColor:'#292F3F',
            
      },headerRight:({ color, size }) => (
        <Ionicons name="help-buoy" size={30} color={color} style={{marginRight:20}} />
      ),
        }}
      />
      <Tab.Screen
        name="Setings"
        component={NotImplement}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          tabBarStyle: {
            borderTopRightRadius:40,
            borderTopLeftRadius:40,
            height:100
            
      }
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
