import React, {Component} from 'react';
import {AppState, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux'


class Comp extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>Here we go!</Text>
        <Text>isForeground: {this.props.appState.isForeground ? 'yes' : 'no'}</Text>
        <Button
          title='do it!'
          onPress={() => console.log('done')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { appState } = state
  return { appState }
};

export default connect(mapStateToProps)(Comp);
