import React, {Component} from 'react';
import {AppState, Platform, StyleSheet, Text, View, Button} from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { increase } from './reducer'


class Comp extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text>Here we go!</Text>
        <Text>isForeground: {this.props.appState.isForeground ? 'yes' : 'no'}</Text>
        <Text>counter: {this.props.appState.counter}</Text>
        <Text>nothing: {this.props.appState.nothing ? 'yes' : 'no'}</Text>
        <Button
          title='do it!'
          onPress={() => this.props.increase()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { appState } = state
  return { appState }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    increase,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
