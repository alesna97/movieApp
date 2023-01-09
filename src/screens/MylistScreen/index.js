import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import useList from '../../hooks/useList';
import useStyles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyListScreen = () => {
  const {fetchList, list} = useList();
  const style = useStyles(0);

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <ScrollView contentContainerStyle={style.container}>
      {list?.map(item => (
        <Card key={item.id} style={style.card}>
          <Text style={style.nameText}>{item.name}</Text>
          <View style={style.listMeta}>
            <Text style={style.numberOfItemText}>
              {item.number_of_items} Item
            </Text>
            {item.public === 1 && <Text style={style.publicText}>Public</Text>}
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default MyListScreen;
