import React from "react";
import { Text, Pressable, Linking, StyleSheet } from "react-native";
// Import alert
import { Alert } from "react-native";

class SettingButton extends React.Component {
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
});

export default SettingButton;
