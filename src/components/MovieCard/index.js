import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import useStyles from './styles';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

const MovieCard = ({title, image, releaseDate, average, ...props}) => {
  const styles = useStyles();
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        navigation.navigate('DetailScreen', {
          title,
          image,
          release_date: releaseDate,
          average,
          ...props,
        })
      }>
      <View style={styles.voteCount}>
        <Text style={styles.voteText}>{average}</Text>
      </View>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500/${image}`}}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.releaseDateText}>
        {releaseDate ? dayjs(releaseDate).format('MMM DD, YYYY') : '-'}
      </Text>
    </Pressable>
  );
};

export default MovieCard;
