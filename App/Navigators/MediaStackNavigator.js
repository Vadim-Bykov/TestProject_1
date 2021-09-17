import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MediaScreen} from '../screens/Media/MediaScreen';
import {MediaDetailsScreen} from '../screens/MediaDetails/MediaDetailsScreen';
import {colors, Icon} from 'react-native-elements';
import {STACK_SCREEN_OPTIONS} from '../consts/consts';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createStackNavigator();
// const Stack = createSharedElementStackNavigator();

export const MediaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{...STACK_SCREEN_OPTIONS}}>
      <Stack.Screen
        name="Movies"
        component={MediaScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={MediaDetailsScreen}
        options={{
          headerTransparent: true,
          // headerBackground: () => null,
          headerBackTitleVisible: false,
          headerTitle: '',
          headerBackImage: () => (
            <Icon
              type="ionicon"
              name="ios-chevron-back"
              size={Platform.select({
                ios: 32,
                android: 24,
              })}
              color={Platform.select({
                ios: colors.platform.ios.primary,
                android: colors.black,
              })}
            />
          ),
        }}
        // sharedElements={route => [route.params.id.toString()]}
      />
    </Stack.Navigator>
  );
};
