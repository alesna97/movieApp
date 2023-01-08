import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import HomeScreen from '../screens/HomeScreen';
import {navigationRef} from './RootNavigation';
import LoginScreen from '../screens/LoginScreen';
import {ActivityIndicator, Linking, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const styles = {
  loadingContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Navigation = () => {
  const {checkAuth, createAccessToken, isFetchRequestToken} = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isFetchRequestToken) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={{
        prefixes: ['movieapp://app'],
        subscribe() {
          const linkingSubscription = Linking.addEventListener(
            'url',
            async () => {
              try {
                await AsyncStorage.setItem('isApprovedRequestToken', '1');
                createAccessToken();
              } catch (error) {}
            },
          );

          return () => {
            linkingSubscription.remove();
          };
        },
        config: {
          screens: {
            HomeScreen: 'home',
          },
        },
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Movie App'}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
