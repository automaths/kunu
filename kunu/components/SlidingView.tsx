import { View } from 'react-native';
import Carousel from './Carousel';
import { IMAGES } from '../data/dummy-data';

const SlidingView = () => {
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                style="slides"
                itemsPerInterval={IMAGES.length}
                items={[IMAGES]}
            />
        </View>
    );
};

export default SlidingView;
