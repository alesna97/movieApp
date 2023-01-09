import React, {useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useAuth from '../hooks/useAuth';
import HomeScreen from '../screens/HomeScreen';
import {navigationRef} from './RootNavigation';
import {ActivityIndicator, Linking, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {IconButton, useTheme} from 'react-native-paper';
import DetailScreen from '../screens/DetailScreen';
import MyListScreen from '../screens/MylistScreen';
import CreateListScreen from '../screens/CreateListScreen';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['movieapp://app'],
  config: {
    screens: {
      HomeScreen: 'home',
    },
  },
};

const styles = {
  loadingContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <IconButton
      icon="movie-plus"
      iconColor="white"
      onPress={() => navigation.navigate('CreateListScreen')}
    />
  );
};

const Navigation = () => {
  const {checkAuth, createAccessToken, isFetchRequestToken} = useAuth();
  const theme = useTheme();

  const subscribe = () => {
    const linkingSubscription = Linking.addEventListener('url', async () => {
      try {
        await AsyncStorage.setItem('isApprovedRequestToken', '1');
        createAccessToken();
      } catch (error) {
        console.log(error);
      }
    });

    return () => {
      linkingSubscription.remove();
    };
  };

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

  const options = {
    headerTintColor: 'white',
    headerStyle: {backgroundColor: theme.colors.secondary},
    headerTitleStyle: {color: 'white'},
    headerBackTitleStyle: {
      color: 'white',
    },
  };

  return (
    <NavigationContainer ref={navigationRef} linking={{...linking, subscribe}}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{...options, title: 'TheMovieApp'}}
        />
        <Stack.Screen
          options={({route}) => ({...options, title: route?.params?.title})}
          name="DetailScreen"
          component={DetailScreen}
        />
        <Stack.Screen
          options={{
            ...options,
            title: 'My List',
            headerRight: () => <HeaderRight />,
          }}
          name="MyListScreen"
          component={MyListScreen}
        />
        <Stack.Screen
          name="CreateListScreen"
          component={CreateListScreen}
          options={{...options, title: 'Create List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
