/**
 * @format
 */

import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import MovieCard from '../src/components/MovieCard';
import {Image, Text} from 'react-native';
import dayjs from 'dayjs';

const movie = {
  adult: false,
  backdrop_path: '/iTyh3hqTUjiRqQo8Uz1w1KtQti9.jpg',
  genre_ids: [18, 878, 9648],
  id: 329865,
  media_type: 'movie',
  original_language: 'en',
  original_title: 'Arrival',
  overview:
    'Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.',
  popularity: 64.172,
  poster_path: '/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
  release_date: '2016-11-10',
  title: 'Arrival',
  video: false,
  vote_average: 7.576,
  vote_count: 15764,
};

const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

describe('<MovieCard /> Component test', () => {
  const testRenderer = renderer.create(
    <MovieCard
      title={movie.title}
      image={movie.poster_path}
      releaseDate={movie.release_date}
      average={movie.vote_average?.toFixed(1)}
    />,
  );

  const testInstance = testRenderer.root;

  it('render movie poster from given source props', () => {
    expect(testInstance.findByType(Image).props.source.uri).toEqual(
      `${baseImageUrl}${movie.poster_path}`,
    );
  });

  it('render movie title correctly', () => {
    expect(testInstance.findAllByType(Text)[1].props.children).toBe(
      movie.title,
    );
  });

  it('render movie date correctly', () => {
    const formattedDate = dayjs(movie.release_date).format('MMM DD, YYYY');
    expect(testInstance.findAllByType(Text)[2].props.children).toBe(
      formattedDate,
    );
  });

  it('render movie vote average correctly', () => {
    expect(testInstance.findAllByType(Text)[0].props.children).toEqual(
      movie.vote_average.toFixed(1),
    );
  });
});
