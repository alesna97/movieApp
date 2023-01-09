import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Text} from 'react-native-paper';
import Menu from '../Menu';
import useStyles from './useStyles';

const Hero = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="cover"
          source={{
            uri: 'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/hPea3Qy5Gd6z4kJLUruBbwAH8Rm.jpg',
          }}>
          <View style={styles.imageBackgroundContent}>
            <Text style={styles.welcomeText}>Welcome.</Text>
            <Text style={styles.descriptionText}>
              Millions of movies, TV shows and people to discover. Explore now.
            </Text>
            <Menu />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Hero;
