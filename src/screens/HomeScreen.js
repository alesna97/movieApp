import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {getMovieRecommendationApi} from '../api/account';

const HomeScreen = () => {
  const fetchMovieRecommendation = async () => {
    try {
      const accountId = await AsyncStorage.getItem('accountId');
      const result = await getMovieRecommendationApi(accountId);

      console.log(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchMovieRecommendation();
  }, []);
  return (
    <View>
      <Text>test</Text>
    </View>
  );
};

export default HomeScreen;
