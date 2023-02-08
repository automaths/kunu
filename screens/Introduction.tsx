import {
    View,
    Pressable,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Carousel, { CarouselData } from 'react-native-intro-carousel';
import { GlobalStyles } from '../constants/Styles';
import { useNavigation } from '@react-navigation/native';
import IntroButton from '../components/UI/IntroButton';
import { RootStackParamList } from '../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';

const dataCarousel = [
    {
        key: '1',
        title: 'Share intimate moments with confidence',
        image: require('../data/heartflow.gif'),
        data: {},
    },
    {
        key: '2',
        title: 'Let your chosen one keep it ...',
        image: require('../data/sharelove.gif'),
        data: {},
    },
    {
        key: '3',
        title: '... and still have control over it',
        image: require('../data/lovelock.gif'),
        data: {},
    },
];

const Introduction = () => {
    type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Root'>;
    const navigation = useNavigation<homeScreenProp>();
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height;

    return (
        <View style={styles.main}>
            <View style={styles.logoView}>
                <Text style={styles.logoText}>Kunu</Text>
            </View>
            <Carousel
                data={dataCarousel}
                buttonsConfig={{}}
                paginationConfig={{
                    color: 'grey',
                    activeColor: GlobalStyles.colors.primary200,
                    bottomOffset: width * 0.25,
                    dotSize: 8,
                }}
                renderItem={(
                    { item, index }: { item: CarouselData; index: number },
                    goToSlide: (slide: number) => void,
                ) => (
                    <View style={styles.content}>
                        <Pressable
                            onPress={() => goToSlide(index + 1)}
                            style={{flex:1, alignItems: 'center', justifyContent: 'center'}}
                        >
                            <Image
                                source={item.image}
                                style={styles.image}
                                resizeMode="contain"
                            />
                            <Text style={styles.titleText}>{item.title}</Text>
                            <View style={styles.buttonsContainer}>
                                {index === 2 ? (
                                    <IntroButton
                                        onPress={() =>
                                            navigation.navigate('FormAge')
                                        }
                                    >
                                        <Text>Start</Text>
                                    </IntroButton>
                                ) : (
                                    <IntroButton
                                        onPress={() => goToSlide(index + 1)}
                                    >
                                        <Text>Continue</Text>
                                    </IntroButton>
                                )}
                            </View>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
};

export default Introduction;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoView: {
        flex: 1,
        position: 'absolute',
        top: '8%',
    },
    logoText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary200,
    },
    titleText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '60%',
        height: '60%',
        position: 'absolute',
        top: '0%',
    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '8%',
        minWidth: '90%',
        position: 'absolute',
        bottom: '8%',
    },
});
