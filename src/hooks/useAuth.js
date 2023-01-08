import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAccessTokenApi, createRequestTokenApi} from '../api/auth';
import {Linking} from 'react-native';
import {useState} from 'react';

const useAuth = () => {
  const [isFetchRequestToken, setIsFetchRequestToken] = useState(false);
  const [isFetchAccessToken, setIsFetchAccessToken] = useState(false);

  const checkAuth = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (!accessToken) {
        createRequestToken();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createRequestToken = async () => {
    try {
      setIsFetchRequestToken(true);
      const result = await createRequestTokenApi();

      if (result) {
        setIsFetchRequestToken(false);
        await AsyncStorage.setItem('isApprovedRequestToken', '0');
        await AsyncStorage.setItem('requestToken', result.data.request_token);
        Linking.openURL(
          `https://www.themoviedb.org/auth/access?request_token=${result.data.request_token}`,
        );
      }
    } catch (error) {
      setIsFetchRequestToken(false);
    }
  };

  const createAccessToken = async () => {
    try {
      setIsFetchAccessToken(true);
      const reqToken = await AsyncStorage.getItem('requestToken');
      const result = await createAccessTokenApi(reqToken);

      if (result) {
        await AsyncStorage.setItem('accessToken', result.data.access_token);
        await AsyncStorage.setItem('accountId', result.data.account_id);
        setIsFetchAccessToken(false);
      }
    } catch (error) {
      setIsFetchAccessToken(false);
    }
  };

  return {
    createAccessToken,
    checkAuth,
    isFetchRequestToken,
    isFetchAccessToken,
  };
};

export default useAuth;
