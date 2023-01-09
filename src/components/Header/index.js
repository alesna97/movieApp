import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Appbar} from 'react-native-paper';
import useStyles from './useStyles';

const Header = ({title, showBackIcon = false}) => {
  const navigate = useNavigation();
  const styles = useStyles();

  return (
    <Appbar.Header style={styles.appbar}>
      {showBackIcon && (
        <Appbar.BackAction
          onPress={() => navigate.goBack()}
          iconColor="white"
        />
      )}
      <Appbar.Content title={title} color="white" />
    </Appbar.Header>
  );
};

export default memo(Header);
