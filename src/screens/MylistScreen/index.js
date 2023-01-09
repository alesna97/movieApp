import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import useList from '../../hooks/useList';
import useStyles from './styles';
import dayjs from 'dayjs';

const MyListScreen = () => {
  const {fetchList, list} = useList();
  const style = useStyles(0);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <ScrollView contentContainerStyle={style.container}>
      {list?.map(item => (
        <Card key={item.id} style={style.card} onPress>
          <Text style={style.nameText}>{item.name}</Text>
          <View style={style.listMeta}>
            <Text style={style.numberOfItemText}>
              {item.number_of_items} Item
            </Text>
            <Text style={style.publicText}>
              {item.public === 1 ? 'Public' : 'Private'}
            </Text>
          </View>
          <Text style={style.updatedAtText}>
            Updated at {dayjs(item.updated_at).format('dddd HH:MM')}
          </Text>
        </Card>
      ))}
    </ScrollView>
  );
};

export default MyListScreen;
