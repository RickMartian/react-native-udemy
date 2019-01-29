import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default class App extends React.Component {
  renderList() {
    const names = [
      'Steve Vai', 
      'Jimi Handrix', 
      'Chimbinha', 
      'Eddie Van Halen'
    ];

    const textElements = names.map((name, index) => {
      return <Text key={name}>{name}</Text>
    });

    return textElements;

  }

  render() {

    return (
      <View>
        <Header title='People'/>
        { this.renderList() }
      </View>
    );
  }
}

