import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen({ navigation, route }) {
  console.log('route.state ???????? ', route.state && route.state);
  console.log('route.state.index ? ', route.state && route.state.index);
  console.log('route ?? ', route);

  route.state && route.state.index > 0
    ? navigation.setOptions({ tabBarVisible: false })
    : navigation.setOptions({ tabBarVisible: true });
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'GAGURI' }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}
// 각 탭 내에 stack navigation이 존재한다!

export default HomeStackScreen;
