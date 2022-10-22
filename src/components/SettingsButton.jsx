import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
//  Import safe area context

class SettingsButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onPress: this.props.onPress ? this.props.onPress : () => {},
			styles: StyleSheet.create({
				button: {
					position: "absolute",
					top: 10,
					right: 0,
					width: 100,
					height: 100,
					// Place items in the center of the button
					justifyContent: "center",
					alignItems: "center",
				},
				icon: {
					color: "#aaa",
				},
			}),
		};
		this.onPressLocal = this.onPressLocal.bind(this);
	}
	render() {
		return (
			<TouchableOpacity
				onPress={this.onPressLocal}
				style={this.state.styles.button}>
				<FontAwesome name={"gear"} size={55} style={this.state.styles.icon} />
			</TouchableOpacity>
		);
	}

	onPressLocal() {
		this.state.onPress();
		// Navigate to settings page
		this.props.navigation.navigate("Settings");
	}
}

export default SettingsButton;
