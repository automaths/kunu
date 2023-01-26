import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, View, Text } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import { human } from 'react-native-typography';
import LinkingConfiguration from "./LinkingConfiguration";
import { GlobalStyles } from "../constants/Styles";
import IconButton from "../components/UI/IconButton";
import Nudes from "../screens/Nudes";
import Adding from "../screens/Adding";
import Settings from "../screens/Settings";
import SearchBar from "../screens/SearchBar";
import ShowFriends from "../screens/ShowFriends";
import AddFriends from "../screens/AddFriend";
import Nudeszer from "../screens/Nudeszer";
import AddPhoto from '../screens/AddPhoto';

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="AddFriends"
                component={AddFriends}
                options={{
                    title: "",
                }}
            />
            <Stack.Screen
                name="ShowFriends"
                component={ShowFriends}
                options={{
                    title: "",
                }}
            />
            {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group> */}
        </Stack.Navigator>
    );
}

const BottomTabs = createBottomTabNavigator();

const defaultHandler = () => {
    console.log('coucou');
}

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    const socialRoutes = ["Social", ];
    const photoRoutes = ["Photo", ]

    const [check, setCheck] = React.useState('AddFriends');
    const [checkzer, setCheckzer] = React.useState(true);

    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation, route }) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary200,
                },
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary200,
                },
                tabBarActiveTintColor: "white",
                headerRight: ({ tintColor }) => (
                    <View style={{flexDirection: 'row'}}>
                        <IconButton
                            icon={socialRoutes.includes(route.name) ? 'person-add' : 'share'}
                            size={28}
                            color={tintColor}
                            onPress={() => {
                                setCheck('AddFriends');
                                setCheckzer(false);
                            }}
                        />
                        <IconButton
                            icon={socialRoutes.includes(route.name) ? 'people' : 'copy'}
                            size={28}
                            color={tintColor}
                            onPress={() => {
                                setCheck('ShowFriends');
                                setCheckzer(false);
                            }}
                        />
                        <IconButton
                            icon={socialRoutes.includes(route.name) ? 'settings' : 'add-circle'}
                            size={28}
                            color={tintColor}
                            onPress={() => {
                                socialRoutes.includes(route.name) ? navigation.navigate("Settings") : setCheckzer(true);
                            }}
                        />
                    </View>
                ),
                headerLeft: ({ tintColor }) => (
                    <View style={{marginLeft: 15,}}>
                        <Text style={human.largeTitleWhiteObject}>Kunu</Text>
                    </View>
                ),
            })}
        >
            <BottomTabs.Screen
                name="Social"
                component={check === "AddFriends" ? AddFriends : ShowFriends}
                options={{
                    title: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="lock-open" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="Photos"
                // component={check === "AddFriends" ? Nudes : checkzer ? AddFriends : Nudeszer}
                component={checkzer ? AddPhoto : check === "AddFriends" ? Nudes : Nudeszer}
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

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
