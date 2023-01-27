import { View } from "react-native";
import Carousel from "./Carousel";

const SlidingView = () => {

    return (
        <View style={{flex:1}}>
          <Carousel
              style="slides"
              itemsPerInterval={1}
              items={[{
                  title: 'Welcome, swipe to continue.',
              }, {
                  title: 'About feature X.',
              }, {
                  title: 'About feature Y.',
              }]} />
        </View>
    );

}

export default SlidingView;