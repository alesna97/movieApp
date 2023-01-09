import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    card: {
      width: 150,
      height: 300,
      borderRadius: 8,
      position: 'relative',
    },
    cardImage: {
      width: 150,
      height: 220,
      borderRadius: 8,
      marginBottom: 24,
    },
    titleText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 14,
      marginBottom: 4,
    },
    releaseDateText: {
      fontSize: 12,
      color: 'gray',
    },
    voteCount: {
      position: 'absolute',
      zIndex: 1,
      backgroundColor: theme.colors.secondary,
      padding: 8,
      borderRadius: 100,
      bottom: 60,
      right: 10,
      borderColor: theme.colors.primary,
      borderWidth: 2,
    },
    voteText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
};

export default useStyles;
