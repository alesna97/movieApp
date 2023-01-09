import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    titleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
      paddingBottom: 8,
      flex: 1,
    },
    sliderContainer: {
      paddingVertical: 8,
      width: '100%',
    },
    scrollItem: {
      marginHorizontal: 8,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
      paddingHorizontal: 16,
    },
    buttonSeeAllText: {
      color: theme.colors.primary,
    },
  });
};

export default useStyles;
