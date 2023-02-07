import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';

Amplify.configure(awsconfig);

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();
    if (!isLoadingComplete) {
        return null;
    }
    return (
        <>
            <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
            </SafeAreaProvider>
        </>
    );
}
