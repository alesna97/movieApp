import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';
import useMovies from '../hooks/useMovies';
import useTv from '../hooks/useTv';

const HomeScreen = () => {
  const movies = useMovies();
  const tv = useTv();

  useEffect(() => {
    movies.recommendation.fetch();
    tv.recommendation.fetch();
  }, []);

  return (
    <View>
      <ScrollView>
        <Hero />
        <MovieList
          title="Recommended Movie"
          loading={movies.recommendation.isFetching}
          data={movies.recommendation.results || []}
        />
        <MovieList
          loading={movies.recommendation.isFetching}
          title="Recommended TV"
          data={tv.recommendation.results || []}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
