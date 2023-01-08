import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {useSelector} from 'react-redux';

const LoginScreen = () => {
  const webviewRef = useRef();
  const {requestToken} = useSelector(state => state.auth);

  const onMessage = data => {
    alert(data);
  };
  return (
    <View style={{height: '100%', width: '100%'}}>
      <WebView
        ref={webviewRef}
        renderLoading={() => 'Please wait...'}
        onMessage={onMessage}
        source={{
          uri: `https://www.themoviedb.org/auth/access?request_token=${requestToken.token}`,
        }}
      />
    </View>
  );
};

export default LoginScreen;
