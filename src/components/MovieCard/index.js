import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import useStyles from './styles';
import dayjs from 'dayjs';

const MovieCard = ({title, image, releaseDate, average, onPress}) => {
  const styles = useStyles();

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.voteCount}>
        <Text style={styles.voteText}>{average}</Text>
      </View>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${image}`}}
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
