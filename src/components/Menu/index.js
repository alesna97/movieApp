import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import useStyles from './styles';

const Menu = () => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.menuItem}>
        <IconButton
          iconColor="white"
          icon="playlist-check"
          onPress={() => navigation.navigate('MyListScreen')}
        />
        <Text style={styles.menuTitleText}>My Lists</Text>
      </View>
      <View style={styles.menuItem}>
        <IconButton
          iconColor="white"
          icon="pencil"
          onPress={() => navigation.navigate('CreateListScreen')}
        />
        <Text style={styles.menuTitleText}>Create List</Text>
      </View>
    </View>
  );
};

export default Menu;
