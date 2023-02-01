import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View, Text } from 'react-native';
import LinkingConfiguration from './LinkingConfiguration';
import { GlobalStyles } from '../constants/Styles';
import IconButton from '../components/UI/IconButton';
import Nudes from '../screens/Nudes';
import Settings from '../screens/Settings';
import ShowFriends from '../screens/ShowFriends';
import Nudeszer from '../screens/Nudeszer';
import AddPhoto from '../screens/AddPhoto';
import SlidingView from '../components/SlidingView';
import AddFriends from '../screens/AddFriend';
import StartButton from '../screens/StartButton';
import ConfirmScreen from '../screens/ConfirmScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

export type RootStackParamList = {
    Root: undefined;
    Settings: undefined;
    AddFriends: undefined;
    ShowFriends: undefined;
    SlidingView: undefined;
    Login: undefined;
    Signup: undefined;
    Confirm: undefined;
    Welcome: undefined;
    StartButton: undefined;
    index: undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName='Root'>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Confirm" component={ConfirmScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/> 
            <Stack.Screen name="StartButton" component={StartButton} options={{ headerShown: false }}/> 

            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="AddFriends"
                component={AddFriends}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="ShowFriends"
                component={ShowFriends}
                options={{
                    title: '',
                }}
            />
            <Stack.Screen
                name="SlidingView"
                component={SlidingView}
                options={{
                    title: '',
                }}
            />
        </Stack.Navigator>
    );
}

const BottomTabs = createBottomTabNavigator();

// "Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignupScreen} />
//             <Stack.Screen name="Confirm" component={ConfirmScreen} />
//             <Stack.Screen name="Welcome" component={WelcomeScreen} /> 
//             <Stack.Screen name="StartButton"

function BottomTabNavigator() {
    // const colorScheme = useColorScheme();
    const socialRoutes = ['Social'];
    const loginRoutes = ['Login', 'Signup', 'Confirm', 'Welcome', 'StartButton'];
    // const loginRoutes = ['Login', 'Signup', 'Confirm', ]
    const [check, setCheck] = React.useState('AddFriends');
    const [checkzer, setCheckzer] = React.useState(true);
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation, route }) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary200,
                },
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary200,
                },
                tabBarActiveTintColor: 'white',
                headerRight: ({ tintColor }) => (
                    <View style={{ flexDirection: 'row' }}>
                        <IconButton
                            icon={
                                socialRoutes.includes(route.name)
                                    ? 'person-add'
                                    : 'share'
                            }
                            size={28}
                            color={tintColor}
                            onPress={() => {
                                setCheck('AddFriends');
                                setCheckzer(false);
                            }}
                        />
                        <IconButton
                            icon={
                                socialRoutes.includes(route.name)
                                    ? 'people'
                                    : 'copy'
                            }
                            size={28}
                            color={tintColor}
                            onPress={() => {
                                setCheck('ShowFriends');
                                setCheckzer(false);
                            }}
                        />
                        <IconButton
                            icon={
                                socialRoutes.includes(route.name)
                                    ? 'settings'
                                    : 'add-circle'
                            }
                            size={28}
                            color={tintColor}
                            onPress={() => {
                                // eslint-disable-next-line no-unused-expressions
                                socialRoutes.includes(route.name)
                                    ? navigation.navigate('Settings')
                                    : setCheckzer(true);
                            }}
                        />
                    </View>
                ),
                // eslint-disable-next-line no-unused-vars
                headerLeft: ({ tintColor }) => (
                    <View style={{ marginLeft: 15 }}>
                        <Text
                            style={{
                                fontFamily: 'Helvetica',
                                fontWeight: 'bold',
                                color: 'black',
                                fontSize: 25,
                            }}
                        >
                            Kunu
                        </Text>
                    </View>
                ),
            })}
        >
            <BottomTabs.Screen
                name="Social"
                component={check === 'AddFriends' ? AddFriends : ShowFriends}
                options={{
                    title: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="lock-open" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Photos"
                component={
                    checkzer
                        ? AddPhoto
                        : check === 'AddFriends'
                            ? Nudes
                            : Nudeszer
                }
                options={{
                    title: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera" size={size} color={color} />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}
// function TabBarIcon(props: {
//     name: React.ComponentProps<typeof FontAwesome>['name'];
//     color: string;
// }) {
//     return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
