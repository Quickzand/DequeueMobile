import React from 'react';
import {ThemeConsumer} from 'react-bootstrap/esm/ThemeProvider';
import {
  Text,
  Pressable,
  Linking,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
// Import alert
import {Alert, TouchableOpacity} from 'react-native';

class GenericButton extends React.Component {
  constructor(props) {
    super(props);
    this.onPressLocal = this.onPressLocal.bind(this);
    this.state = {
      onPress: this.props.onPress ? this.props.onPress : () => {},
      styles: StyleSheet.create({
        button: {
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : '#0f0f0f',
          borderRadius: 10,
          padding: 15,
          margin: 10,
        },
        text: {
          color: '#FFFFFF',
          fontSize: 20,
          textAlign: 'center',
        },
      }),
    };
  }
  render() {
    // On click links to google.com
    return (
      <TouchableOpacity
        onPress={this.onPressLocal}
        style={this.state.styles.button}>
        <Text style={this.state.styles.text}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }

  onPressLocal() {
    this.state.onPress();
    // Create alert
    Alert.alert('Dequeue', 'Confirmed');
  }
}

class GenericTextInput extends React.Component {
  handleChange = text => {
    this.props.onChange ? this.props.onChange(text) : () => {};
  };

  constructor(props) {
    super(props);
    this.state = {
      styles: StyleSheet.create({
        textInput: {
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          padding: 10,
          margin: 10,
          marginTop: 30,
          fontSize: 20,
        },
      }),
      title: this.props.title ? this.props.title : 'Title',
    };
  }
  render() {
    return (
      <View
        style={{
          backgroundColor: '#0f0f0f',
          width: '100%',
          padding: 20,
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 40,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          {this.state.title}
        </Text>
        {this.props.children}
        <TextInput
          style={styles.textInput}
          value={this.props.value}
          onChangeText={this.handleChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    color: '#FFF',
    padding: 10,
    borderRadius: 10,
  },

  text: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  textInput: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#FFF',
    height: 60,
    fontSize: 30,
  },
});

export {GenericButton, GenericTextInput};
