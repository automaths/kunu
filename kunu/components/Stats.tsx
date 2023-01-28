import { View, Image, Dimensions } from 'react-native';

const Stats = (props:{id: string, path: string}) => {
    const path = '../data/images/' + '1.jpeg';
    // console.log(`the path is ${props.path}`);

    return (
        <View style={{height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center'}}>
            <Image source={require(path)} style = {{height: 500, width: Dimensions.get('window').width}} />
        </View>
    );
};

export default Stats;

