import React from "react";

import { TouchableOpacity, View, Text } from "react-native";
// Imports icon
import { FontAwesome } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-web";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<View style={styles.navbar}>
				<NavButton iconName="home" navigation={this.props.navigation} />
				<NavButton iconName="gear" navigation={this.props.navigation} />
			</View>
		);
	}
}

class NavButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			onPress: this.props.onPress ? this.props.onPress : () => {},
			iconName: this.props.iconName ? this.props.iconName : "home",
			selected: this.props.selected ? this.props.selected : false,
		};
		this.onPressLocal = this.onPressLocal.bind(this);
	}
	render() {
		var navButtonStyles = {
			touchable: {
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				width: "50%",
				height: "100%",
			},

			text: {
				color: this.state.selected ? "blue" : "white",
			},
		};
		return (
			<TouchableOpacity
				style={navButtonStyles.touchable}
				onPress={this.onPressLocal}>
				<FontAwesome
					name={this.state.iconName}
					size={65}
					color={this.state.selected ? "blue" : "white"}
				/>
				<Text style={navButtonStyles.text}>TEST</Text>
			</TouchableOpacity>
		);
	}

	onPressLocal() {
		// Logs true
		console.log(this.state.selected);
		this.setState({ selected: true });
		this.state.onPress();
		this.props.navigation.navigate("Settings", { name: "Jane" });
	}
}

const styles = {
	navButton: {},
	navbar: {
		backgroundColor: "#000",
		color: "#FFF",
		// Adds a shadow at the top
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		width: "100%",
		height: 100,
		// Allign at bottom of page
		position: "absolute",
		bottom: 0,
		// Center and middle aligns children
		alignItems: "baseline",
		justifyContent: "space-around",
		flexDirection: "row",
		paddingTop: 20,
		paddingBottom: 20,
	},
};

export default Navbar;
