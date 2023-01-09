import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      backgroundColor: '#CCCCCC',
      marginBottom: 16,
    },
    title: {
      fontSize: 16,
      color: 'black',
      marginBottom: 16,
      fontWeight: 'bold',
    },
    switchContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
    },
    switchLabel: {
      color: 'black',
    },
  });
};

export default useStyles;
