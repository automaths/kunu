import { View, Image, Dimensions } from 'react-native';

const SlidingView = (props: {route:any}) => {
    let httpUrl = {uri : props.route.params.image}
    return (
        <View style={{ flex: 1 }}>
            {/* <Carousel
                style="slides"
                itemsPerInterval={props.route.params.images.length}
                items={[props.route.params.images]}
                index={props.route.params.index}
            /> */}
            <Image source={httpUrl} style = {{height: 500, width: Dimensions.get('window').width, marginTop: '30%'}} />
        </View>
    );
};

export default SlidingView;
