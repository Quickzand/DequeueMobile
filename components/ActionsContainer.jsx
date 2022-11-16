import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import Action from './Action';

class ActionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actions: this.props.actions ? this.props.actions : [],
    };
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={StyleSheet.create({
          // A two column layout
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          // Set flex spacing
          flex: 1,
          marginTop: 100,
          width: '100%',
          height: '100%',
        })}
        style={{
          width: '100%',
          height: '100%',
        }}>
        {this.state.actions.map((action, index) => {
          return (
            <Action
              key={index}
              title={action.name}
              onPress={action.onPress}
              backgroundColor={action.backgroundColor}
            />
          );
        })}
      </ScrollView>
    );
  }
}

export default ActionsContainer;
