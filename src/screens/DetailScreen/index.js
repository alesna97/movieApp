import dayjs from 'dayjs';
import React, {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MovieList from '../../components/MovieList';
import useMovies from '../../hooks/useMovies';
import useStyles from './styles';

const DetailScreen = ({route}) => {
  const {params} = route;
  const style = useStyles();
  const movies = useMovies();

  useEffect(() => {
    movies.recommendation.fetch();
  }, []);
  return (
    <ScrollView>
      <ImageBackground
        style={style.backdrop}
        resizeMode="cover"
        source={{
          uri: `https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/${params?.backdrop_path}`,
        }}>
        <View style={style.wrapper}>
          <View style={style.content}>
            <Image
              style={style.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${params.poster_path}`,
              }}
            />
            <View style={style.meta}>
              <Text style={style.titleText}>
                {params.title} ({dayjs(params.release_date).format('YYYY')})
              </Text>
              <Text style={style.subtitleText}>
                {params.original_language} - {params.media_type}
              </Text>

              <View style={style.voteMetaContainer}>
                <View style={style.voteWrapper}>
                  <View style={style.voteCount}>
                    <Text style={style.voteText}>
                      {params.vote_average?.toFixed(1)}
                    </Text>
                  </View>
                  <Text style={style.userScoreText}>User Score</Text>
                </View>

                <View style={style.voteWrapper}>
                  <View style={style.voteCount}>
                    <Icon name="thumb-up" color="white" />
                  </View>
                  <Text style={style.userScoreText}>{params.vote_count}</Text>
                </View>
              </View>
              <Button
                icon="book-plus"
                mode="contained"
                textColor="white"
                style={style.buttonAdd}>
                Add to list
              </Button>
            </View>
          </View>

          <View style={style.description}>
            <Text style={style.overviewTitleText}>Overview</Text>
            <Text style={style.overviewText}>{params.overview}</Text>
          </View>
        </View>
      </ImageBackground>
      <MovieList
        title="Related Movies"
        loading={movies.recommendation.isFetching}
        data={movies.recommendation.results || []}
      />
    </ScrollView>
  );
};

export default DetailScreen;
