import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5
        },
        tabBarActiveTintColor: 'blue',
        sceneStyle: {
          backgroundColor: '#fff'
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{ title: 'Home', tabBarIcon: ({color}) => (<Text style={{color: color}}>Tab1</Text>) }} component={HomeScreen} />
      <Tab.Screen name="Tab2" options={{ title: 'Profile', tabBarIcon: ({color}) => (<Text style={{color: color}} >Tab2</Text>) }} component={ProfileScreen} />
      <Tab.Screen name="Tab3" options={{ title: 'Settings', tabBarIcon: ({color}) => (<Text style={{color: color}}>Tab3</Text>) }} component={SettingsScreen} />
    </Tab.Navigator>
  );
}