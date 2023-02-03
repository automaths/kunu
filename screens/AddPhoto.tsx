import { useState } from 'react';
import { View } from '../components/Themed';
import Button from '../components/UI/Button';
import { GlobalStyles } from '../constants/Styles';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Storage } from "@aws-amplify/storage"


const AddPhoto = () => {
            
    const handleUpload = async () => {
        const result = await Storage.put("test.txt", "Hello");
        console.log(result);
    }

    const handleDownload = async () => {
        const result = await Storage.get('test.txt', { 
            level: 'public'
        });
        console.log(result);
    }

    const handleList = async () => {
        // Storage.list('photos/') // for listing ALL files without prefix, pass '' instead
        Storage.list('') // for listing ALL files without prefix, pass '' instead
                .then(result => console.log(result))
                .catch(err => console.log(err));
    }

    const handleRemove = async () => {
        const result = await Storage.remove('test.txt');
        console.log(result);
    }

    return (
        <View style={styles.base}>
            <View style={styles.topRow}>
                <View style={styles.buttonDivider}>
                    <Button style={styles.topButtons} onPress={handleUpload}>
                        Upload
                    </Button>
                </View>
                <View style={styles.buttonDivider}>
                    <Button style={styles.topButtons} onPress={handleDownload}>
                        Download
                    </Button>
                </View>
                <View style={styles.buttonDivider}>
                    <Button style={styles.topButtons} onPress={handleList}>
                        List
                    </Button>
                </View>
                <View style={styles.buttonDivider}>
                    <Button style={styles.topButtons} onPress={handleRemove}>
                        Remove
                    </Button>
                </View>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    base: {
        flex: 1,
        backgroundColor: 'white',
    },
    topRow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDivider: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topButtons: {
        marginTop: 10,
        backgroundColor: GlobalStyles.colors.primary500,
        borderRadius: 4,
        width: windowWidth < 600 ? 120 : 240,
        height: windowHeight < 1100 ? 40 : 80,
        marginHorizontal: 8,
    },
});

export default AddPhoto;
