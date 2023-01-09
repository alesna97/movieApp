import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, View} from 'react-native';
import {ActivityIndicator, Text, useTheme} from 'react-native-paper';
import MovieCard from '../MovieCard';
import useStyles from './styles';

const MovieList = ({title, data = [], loading}) => {
  const theme = useTheme();
  const styles = useStyles();
  const navigation = useNavigation();

  const handleCardPress = useCallback(params =>
    navigation.navigate('DetailScreen', params),
  );

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
                onPress={() => handleCardPress(item)}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default MovieList;
