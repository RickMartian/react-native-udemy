import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: people.picture.large }} />
        <View style={styles.detailContainer}>
          <Line label="Email:" content={people.email} />
          <Line label="City:" content={people.location.city} />
          <Line label="State:" content={people.location.state} />
          <Line label="Phone:" content={people.phone} />
          <Line label="Cell:" content={people.cell} />
          <Line label="Nationality" content={people.nat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    aspectRatio: 1
  },

  container: {
    padding: 15
  },

  detailContainer: {
    backgroundColor: '#E2F9FF',
    marginTop: 20,
    elevation: 1
  }
});
