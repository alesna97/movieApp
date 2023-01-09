import {StyleSheet} from 'react-native';

const useStyles = () => {
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 16,
      height: 80,
    },
    menuItem: {
      flex: 1,
      height: 24,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    },
    menuTitleText: {
      color: 'white',
    },
  });
};

export default useStyles;
