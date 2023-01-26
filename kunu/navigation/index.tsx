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
import Home from "../screens/SearchBar";

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
                name="AnotherRoot"
                component={AnotherBottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ManageExpense"
                component={Settings}
                options={{
                    // title: "Profile",
                }}
            />
            <Stack.Screen
                name="AddFriend"
                component={Adding}
                options={{
                    title: "Add",
                    presentation: "modal",
                }}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

const BottomTabs = createBottomTabNavigator();

const defaultHandler = () => {
    console.log('coucou');
}

function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: ({ tintColor }) => (
                    <View style={{flexDirection: 'row'}}>
                        <IconButton
                            icon="person-add"
                            size={28}
                            color={tintColor}
                            onPress={() => {
                            navigation.navigate("ManageExpense");
                            }}
                        />
                        <IconButton
                            icon="people"
                            size={28}
                            color={tintColor}
                            onPress={() => {
                            navigation.navigate("ManageExpense");
                            }}
                        />
                        <IconButton
                            icon="settings"
                            size={28}
                            color={tintColor}
                            onPress={() => {
                            navigation.navigate("ManageExpense");
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
                name="RecentExpenses"
                component={Home}
                options={{
                    title: "",
                    //   tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="lock-open" size={size} color={color} />
                    ),
                }}
                listeners={{
                    tabPress: e => {
                      console.log("ouech");
                    },
                  }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={Nudes}
                options={{
                    title: "",
                    //   tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera" size={size} color={color} />
                    ),
                }}
                />
        </BottomTabs.Navigator>
    );
}

function AnotherBottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: ({ tintColor }) => (
                    <View style={{flexDirection: 'row'}}>
                        <IconButton
                            icon="people"
                            size={28}
                            color={tintColor}
                            onPress={() => {
                            navigation.navigate("ManageExpense");
                            }}
                        />
                        <IconButton
                            icon="people"
                            size={28}
                            color={tintColor}
                            onPress={() => {
                            navigation.navigate("ManageExpense");
                            }}
                        />
                        <IconButton
                            icon="people"
                            size={28}
                            color={tintColor}
                            onPress={() => {
                            navigation.navigate("ManageExpense");
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
                name="RecentExpenses"
                component={Home}
                options={{
                    title: "",
                    //   tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="lock-open" size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="AllExpenses"
                component={Nudes}
                options={{
                    title: "",
                    //   tabBarLabel: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera" size={size} color={color} />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
