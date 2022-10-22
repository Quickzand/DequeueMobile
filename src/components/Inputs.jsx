import React from "react";
import {
	Text,
	Pressable,
	Linking,
	StyleSheet,
	TextInput,
	View,
} from "react-native";
// Import alert
import { Alert } from "react-native";

class GenericButton extends React.Component {
	constructor(props) {
		super(props);
		this.onPressLocal = this.onPressLocal.bind(this);
		this.state = {
			onPress: this.props.onPress ? this.props.onPress : () => {},
			styles: StyleSheet.create({
				button: {
					backgroundColor: "#000000",
					borderRadius: 10,
					padding: 10,
					margin: 10,
				},
				text: {
					color: "#FFFFFF",
					fontSize: 20,
					textAlign: "center",
				},
			}),
		};
	}
	render() {
		// On click links to google.com
		return (
			<Pressable onPress={this.onPressLocal} style={this.state.styles.button}>
				<Text style={this.state.styles.text}>{this.props.children}</Text>
			</Pressable>
		);
	}

	onPressLocal() {
		// Modify Styles
		this.setState({
			styles: StyleSheet.create({
				button: {
					backgroundColor: "#ff0000",
					borderRadius: 10,
					padding: 10,
					margin: 10,
					scale: 0.9,
					filter: "brightness(1.5)",
				},
				text: {
					color: "#FFFFFF",
					fontSize: 20,
					textAlign: "center",
				},
			}),
		});
		this.state.onPress();
		// Create alert
		Alert.alert("Dequeue", "Confirmed");
	}
}

class GenericTextInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			styles: StyleSheet.create({
				textInput: {
					backgroundColor: "#FFFFFF",
					borderRadius: 10,
					padding: 10,
					margin: 10,
					fontSize: 20,
				},
			}),
			title: this.props.title ? this.props.title : "Title",
		};
	}
	render() {
		return (
			<View
				style={{
					backgroundColor: "#0f0f0f",
					width: "100%",
					padding: 20,
					borderRadius: 20,
				}}>
				<Text
					style={{
						color: "#FFFFFF",
						fontSize: 40,
						fontWeight: "bold",
						marginBottom: 20,
					}}>
					{this.state.title}
				</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={this.props.onChangeText}
					value={this.props.value}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "red",
		color: "#FFF",
		padding: 10,
		borderRadius: 10,
	},

	text: {
		color: "#FFF",
		fontSize: 20,
		fontWeight: "bold",
	},

	textInput: {
		backgroundColor: "rgba(0,0,0,0.5)",
		color: "#FFF",
		height: 60,
		fontSize: 30,
	},
});

export { GenericButton, GenericTextInput };
