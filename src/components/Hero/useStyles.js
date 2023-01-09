import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      display: 'flex',
      width: '100%',
      height: 200,
    },
    imgContainer: {
      flex: 1,
      width: '100%',
    },
    imageBackground: {
      width: '100%',
      height: '100%',
    },
    imageBackgroundContent: {
      padding: 16,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    welcomeText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    descriptionText: {
      color: 'white',
      fontSize: 14,
    },
  });
};

export default useStyles;
