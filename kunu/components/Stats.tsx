import { View, Image, Dimensions } from 'react-native';

const Stats = (props:{id: string, path: string, image:any}) => {

    return (
        <View style={{height: '100%', width: '100%', alignContent: 'center', justifyContent: 'center'}}>
            <Image source={props.image} style = {{height: 500, width: Dimensions.get('window').width}} />
        </View>
    );
};

export default Stats;

