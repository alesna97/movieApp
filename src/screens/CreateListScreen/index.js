import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Switch, Text, TextInput, useTheme} from 'react-native-paper';
import useList from '../../hooks/useList';
import useStyles from './styles';

const CreateListScreen = () => {
  const style = useStyles();
  const theme = useTheme();
  const navigation = useNavigation();
  const {createList, isCreateList, fetchList} = useList();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);

  const handleChangeName = value => setName(value);
  const handleChangeDescription = value => setDescription(value);
  const togglePublic = value => setIsPublic(value);

  const onSubmit = async () => {
    const params = {
      name,
      description,
      public: isPublic,
      iso_639_1: 'en',
    };
    await createList(params);
    fetchList();
    navigation.navigate('MyListScreen');
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <Text style={style.title}>Create new list</Text>
        <TextInput
          label="Name"
          placeholder="List name"
          textColor="black"
          placeholderTextColor={theme.colors.secondary}
          style={style.input}
          mode="flat"
          value={name}
          onChangeText={handleChangeName}
          disabled={isCreateList}
        />
        <TextInput
          label="Description"
          placeholder="List description"
          multiline
          textColor="black"
          style={style.input}
          placeholderTextColor={theme.colors.secondary}
          mode="flat"
          value={description}
          onChangeText={handleChangeDescription}
          disabled={isCreateList}
        />
        <View style={style.switchContainer}>
          <Switch
            value={isPublic}
            onValueChange={togglePublic}
            disabled={isCreateList}
          />
          <Text style={style.switchLabel}>Public</Text>
        </View>

        <Button
          mode="contained"
          onPress={onSubmit}
          textColor="white"
          loading={isCreateList}>
          Save
        </Button>
      </View>
    </ScrollView>
  );
};

export default CreateListScreen;
