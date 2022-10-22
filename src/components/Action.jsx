import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Action extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			icon: this.props.icon ? this.props.icon : "chart-bubble",
			styles: StyleSheet.create({
				button: {
					// Background color is either the color passed in or choose randomly between 19364D and 37718E
					backgroundColor: this.props.backgroundColor
						? this.props.backgroundColor
						: pickRandomColor(),
					// Make width and height 30% of the screen width
					width: 125,
					height: 125,
					borderRadius: 25,
					margin: 6,
					// Place items in the center of the button
					justifyContent: "center",
					alignItems: "center",
					position: "relative",
					overflow: "hidden",
				},
				text: {
					position: "absolute",
					fontSize: 15,
					color: "#fff",
					fontWeight: "bold",
					bottom: 0,
					textAlign: "right",
					width: "100%",
					paddingRight: 15,
					paddingBottom: 10,
					textShadowColor: "rgba(0, 0, 0, 1)",
					textShadowOffset: { width: 2, height: 2 },
					textShadowRadius: 1,
				},
				icon: {
					color: "#fff",
					position: "absolute",
					top: "0%",
					left: "0%",
				},
			}),
			title: this.props.title ? this.props.title : "Default",
		};
	}
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View style={this.state.styles.button}>
					<MaterialCommunityIcons
						name={this.state.icon}
						size={90}
						style={this.state.styles.icon}
					/>
					<Text style={this.state.styles.text}>{this.state.title}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

function pickRandomColor() {
	let colors = ["#19364D", "#37718E"];
	return colors[Math.floor(Math.random() * colors.length)];
}

export default Action;
