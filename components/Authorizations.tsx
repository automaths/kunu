import { Text, View } from './Themed';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { DEMANDS } from '../data/dummy-data';
import { REQUESTS } from '../data/dummy-data';
import { GlobalStyles } from '../constants/Styles';
import Button from './UI/Button';
import { useNavigation } from '@react-navigation/native';

const Authorization = () => {
    const touchDemand = () => {
        console.log('demand touched');
    };

    function renderDemands(itemData: any) {
        return (
            <Pressable
                onPress={touchDemand}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.expenseItem}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{itemData.item.name}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    function renderRequests(itemData: any) {
        return (
            <Pressable
                onPress={touchDemand}
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={styles.expenseItem}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amount}>{itemData.item.name}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    const navigation = useNavigation();

    const addFriend = () => {
        navigation.navigate('AddFriend', {});
    };

    return (
        <>
            <View style={styles.containers}>
                <View>
                    <Button onPress={addFriend}>Add friend</Button>
                </View>
                <View style={styles.containers}>
                    <Text>Coucou c'est les demandes</Text>
                    <FlatList
                        data={DEMANDS}
                        renderItem={renderDemands}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <View style={styles.containers}>
                    <Text>Coucou c'est la requests</Text>
                    <FlatList
                        data={REQUESTS}
                        renderItem={renderRequests}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    );
};

export default Authorization;

const styles = StyleSheet.create({
    containers: {
        flex: 1,
    },
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
});
