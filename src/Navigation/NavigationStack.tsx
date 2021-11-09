import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from './ScreenNames';
import Gallery from '../Components/Gallery';
import Favorites from '../Components/Favorites';
import FilledHeartIcon from '../icons/FilledHeartIcon';

const NavigationStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNames.Gallery}
          component={Gallery}
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenNames.Favorites)}>
                <Text>
                  <FilledHeartIcon />
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name={ScreenNames.Favorites} component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
