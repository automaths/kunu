import { Text, View, Image } from 'react-native';

const Stats = (props:any) => {
    return (
        <View style={{height: '100%', width: '100%', flex:1, backgroundColor: 'red'}}>
            <Text style={{flex:1}}>Coucou</Text>
            <Image source={require('../data/new_photo.png')} style = {{ width: 500, height: 500 }} />
        </View>
    );
}

export default Stats;

