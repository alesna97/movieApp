import React from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityIndicator, Text, useTheme} from 'react-native-paper';
import MovieCard from '../MovieCard';
import useStyles from './styles';

const MovieList = ({title, data = [], loading}) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <View style={styles.sliderContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {loading ? (
        <ActivityIndicator color={theme.colors.secondary} />
      ) : (
        <ScrollView horizontal>
          {data.map(item => (
            <View key={item.id} style={styles.scrollItem}>
              <MovieCard
                title={item.title || item.name}
                image={item.poster_path}
                releaseDate={item.release_date || item.first_air_date}
                average={item.vote_average?.toFixed(1)}
                {...item}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MovieList;
