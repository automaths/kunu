import { View } from 'react-native';
import Carousel from './Carousel';
import { IMAGES } from '../data/dummy-data';

const SlidingView = (props: {route:any, images: any}) => {
    console.log(`the route is ${props.route.params.index}`);
    console.log(props.route);
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                style="slides"
                itemsPerInterval={IMAGES.length}
                items={[props.route.params.images[0]]}
            />
        </View>
    );
};

export default SlidingView;
