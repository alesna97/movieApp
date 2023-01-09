import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    appbar: {
      backgroundColor: theme.colors.secondary,
    },
  });
};

export default useStyles;
