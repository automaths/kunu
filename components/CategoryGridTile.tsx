import { Pressable, View, StyleSheet, Platform, Image } from 'react-native';
import { GlobalStyles } from '../constants/Styles';

function CategoryGridTile(props: any) {
    let httpUrl = { uri: props.image }
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={props.onPress}
                onLongPress={props.onLongPress}
            >
                <Image
                    source={httpUrl}
                    style={{ width: '100%', height: '100%',}}
                />
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        width: '33.45%',
        height: '33.45%',
        maxWidth: '33.45%',
        aspectRatio: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: GlobalStyles.colors.primary200,
        elevation: 4,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        textAlign: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});
