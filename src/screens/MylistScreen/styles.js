import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      padding: 16,
    },
    card: {
      display: 'flex',
      backgroundColor: 'white',
      height: 150,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    nameText: {
      color: 'black',
      fontSize: 18,
      textAlign: 'center',
    },
    listMeta: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
    },
    publicText: {
      color: 'white',
      backgroundColor: 'gray',
      borderRadius: 4,
      padding: 4,
      fontSize: 12,
    },
    numberOfItemText: {
      fontSize: 12,
      color: 'black',
      marginRight: 8,
    },
    updatedAtText: {
      fontSize: 12,
      color: 'black',
      marginTop: 4,
    },
  });
};

export default useStyles;
