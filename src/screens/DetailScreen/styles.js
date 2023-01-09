import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    backdrop: {
      width: '100%',
      height: 420,
      marginBottom: 8,
    },
    wrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      paddingTop: 36,
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 16,
      alignItems: 'center',
      marginBottom: 16,
    },
    poster: {
      height: 160,
      width: 110,
      marginRight: 8,
    },
    meta: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
    titleText: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    voteCount: {
      backgroundColor: theme.colors.secondary,
      padding: 8,
      borderRadius: 100,
      borderColor: theme.colors.primary,
      borderWidth: 2,
      width: 36,
      height: 36,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    voteText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 10,
    },
    voteWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    userScoreText: {
      color: 'white',
      fontSize: 12,
      marginLeft: 8,
      fontWeight: 'bold',
      width: 40,
    },
    subtitleText: {
      fontSize: 12,
      color: 'white',
      marginBottom: 16,
    },
    voteMetaContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    overviewText: {
      color: 'white',
      fontSize: 12,
    },
    description: {
      paddingHorizontal: 16,
    },
    overviewTitleText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
      marginBottom: 8,
    },
    buttonAdd: {
      marginTop: 16,
    },
  });
};

export default useStyles;
