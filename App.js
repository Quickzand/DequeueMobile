import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {GenericButton, GenericTextInput} from './components/Inputs.jsx';
import SettingsButton from './components/SettingsButton.jsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Action from './components/Action.jsx';
import Icon from './components/Icons.jsx';
import ActionsContainer from './components/ActionsContainer.jsx';
import {getOverlayDirection} from 'react-bootstrap/esm/helpers.js';
import {Camera} from 'react-native-vision-camera';

const Stack = createNativeStackNavigator();

const tempActions = [
  {
    name: 'Copy',
  },
  {
    name: 'Paste',
  },
  {
    name: 'Cut',
  },
];

const port = 6321;

// Pulls actions from ip:port/getActions
function getActions(ip) {
  console.log(ip);
  fetch(`http://${ip}:${port}/getActions`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

export default function App() {
  const [ip, setIp] = useState('');

  return (
    <SafeAreaProvider style={styles.body}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            params={{ip: ip}}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            initialParams={{setIp: setIp}}
            options={{
              headerStyle: {
                backgroundColor: '#000',
              },
              headerTitleStyle: {
                color: '#fff',
              },
            }}
          />
          <Stack.Screen name="ScanQR" component={scanQRScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <TouchableOpacity
        onPress={() => getActions(ip)}
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          width: 100,
          height: 100,
          // Place items in the center of the button
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon iconName="refreshIcon" width={50} height={50} />
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const HomeScreen = ({navigation, route}) => {
  const {ip} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ActionsContainer actions={tempActions} />
      <SettingsButton navigation={navigation} />
    </View>
  );
};

const SettingsScreen = ({navigation, route}) => {
  const {setIp} = route.params;
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}>
      <ScrollView
        contentContainerStyle={{
          width: '100%',
          height: '100%',
        }}>
        <GenericTextInput title="Computer IP" onChange={setIp}>
          <GenericButton
            backgroundColor={'#37718E'}
            onpress={function () {
              navigation.navigate('ScanQR');
            }}>
            <Text>Scan QR Code</Text>
          </GenericButton>
        </GenericTextInput>
      </ScrollView>
    </View>
  );
};

const scanQRScreen = ({navigation}) => {
  const chseckCameraPermission = async () => {
    let status = await Camera.getCameraPermissionStatus();
    if (status !== 'authorized') {
      await Camera.requestCameraPermission();
      status = await Camera.getCameraPermissionStatus();
      if (status === 'denied') {
        showToast(
          'You will not be able to scan if you do not allow camera access',
        );
      }
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  return (
    <View>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={!isScanned}
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
        audio={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  body: {
    backgroundColor: '#000',
  },
});
