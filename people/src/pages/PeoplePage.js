/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import PeopleList from './../components/PeopleList';

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.getApi();
  }

  getApi() {
    axios
      .get('https://randomuserNOT.me/api?nat=br&results=200')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
      });
  }

  renderPage() {
    if (this.state.loading) return <ActivityIndicator size="large" color="#6CA2F7" />;

    if (this.state.error) {
      return <Text style={styles.error}>Ops... algo deu errado =(</Text>;
    }

    return (
      <PeopleList
        peoples={this.state.peoples}
        onPressItem={pageParams => {
          this.props.navigation.navigate('PeopleDetail', pageParams);
        }}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPage()}
        {/* {this.state.loading ? <ActivityIndicator size="large" color="#6CA2F7" /> : null} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  error: {
    color: 'red',
    alignSelf: 'center'
  }
});
