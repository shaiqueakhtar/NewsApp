import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import NewsFeed from './screens/NewsFeed';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Login" component={Login} />
		<stack.Screen name="NewsFeed" component={NewsFeed} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
