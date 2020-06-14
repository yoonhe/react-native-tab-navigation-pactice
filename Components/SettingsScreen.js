import React from 'react';
import { View, Text, Button } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Settings Details"
        onPress={() => navigation.navigate('SettingsDetails')}
      />
    </View>
  );
}

export default SettingsScreen;
