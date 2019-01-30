import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
  const { peoples, onPressItem } = props;

  return (
    <FlatList
      style={styles.container}
      data={peoples}
      keyExtractor={item => item.name.first}
      renderItem={({ item }) => {
        return <PeopleListItem people={item} navigateToPeopleDetail={onPressItem} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff'
  }
});

export default PeopleList;
