import React from 'react';
import { View, ScrollView } from 'react-native';
import Stats from './Stats';

export const Carousel = (props: any) => {
    const { items, style } = props;
    const itemsPerInterval =
        props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

    const [intervals, setIntervals] = React.useState(1);
    const [width, setWidth] = React.useState(0);

    const init = (width: number) => {
        // initialise width
        setWidth(width);
        // initialise total intervals
        const totalItems = items.length;
        setIntervals(Math.ceil(totalItems / itemsPerInterval));
    };

    return (
        <View>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ width: `${100 * intervals}%` }}
                showsHorizontalScrollIndicator={false}
                onContentSizeChange={(w, h) => init(w)}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate="fast"
            >
                {items[0].map((item: any, index: number) => {
                    console.log(`the item index is ${item.index}`);
                    console.log(item);
                    return (
                        <Stats
                            key={index}
                            index={index}
                            id={item.id}
                            path={item.path}
                            image={item.image}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Carousel;
