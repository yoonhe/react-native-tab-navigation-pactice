import * as React from 'react';
import { StatusBar, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from './Test';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const 

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function SettingDetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettingDetails!!!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('SettingDetails')}
      />
    </View>
  );
}

function HomeStackScreen({ navigation, route }) {
  // 방법1)
  // React.useEffect(() => {
  //   navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  // }, [navigation, route]);

  route.state && route.state.index > 0
    ? navigation.setOptions({ tabBarVisible: false })
    : navigation.setOptions({ tabBarVisible: true });

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function getHeaderTitle(route) {
  // tab navigator의 `route.state` state를 사용한다
  const routeName = route.state
    ? route.state.routes[route.state.index].name // 현재 active된 route name을 tab navigator에서 가져온다
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'GEAGURI';
    case 'Settings':
      return 'GEAGURI Setting';
  }
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeStackScreen}
          options={({ route }) => ({
            // 방법2)
            headerTitle: getHeaderTitle(route),
          })}
        />
        <stack.Screen name="Details" component={DetailsScreen} />
        <stack.Screen name="SettingDetails" component={SettingDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
