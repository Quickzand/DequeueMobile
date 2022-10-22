import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import SettingButton from "./src/components/SettingButton.jsx";
import SettingsButton from "./src/components/SettingsButton.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Action from "./src/components/Action.jsx";
import { getOverlayDirection } from "react-bootstrap/esm/helpers.js";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider style={styles.body}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{}}>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="Settings"
						component={SettingsScreen}
						options={{
							headerStyle: {
								backgroundColor: "#000",
							},
							headerTitleStyle: {
								color: "#fff",
							},
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView
				contentContainerStyle={StyleSheet.create({
					// A two column layout
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-start",
					alignItems: "center",
					flexWrap: "wrap",
					// Set flex spacing
					flex: 1,
					marginTop: 100,
					width: "100%",
				})}>
				<Action title="Copy" backgroundColor="#118002" />
				<Action title="Paste" />
				<Action title="^ Brush" />
				<Action />
			</ScrollView>
			<Text>Seth loves men</Text>
			<DequeueButton>
				<Text> Confirm that seth loves men </Text>
			</DequeueButton>
			<SettingsButton navigation={navigation} />
		</View>
	);
};

const SettingsScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Settings</Text>
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000",
		alignItems: "center",
		justifyContent: "center",
	},
	body: {
		backgroundColor: "#000",
	},
});
