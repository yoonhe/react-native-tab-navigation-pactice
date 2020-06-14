import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './SettingsScreen';
import DetailsSettingScreen from './DetailsSettingScreen';
const SettingsStack = createStackNavigator();

function SettingsStackScreen({ navigation, route }) {
  // console.log('route.state ???????? ', route.state && route.state);
  // console.log('route.state.index ? ', route.state && route.state.index);

  route.state && route.state.index > 0
    ? navigation.setOptions({ tabBarVisible: false })
    : navigation.setOptions({ tabBarVisible: true });

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen
        name="SettingsDetails"
        component={DetailsSettingScreen}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
