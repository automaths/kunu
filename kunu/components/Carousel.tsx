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

    // console.log(`the item is ${items}`);
    // console.log(items);

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
                {items.map((item: any, index: number) => {
                    console.log(`the item is`);
                    console.log(item);
                    switch (style) {
                    case 'stats':
                        return (
                            <Stats
                                key={index}
                                index={index}
                                id={item.id}
                                path={item.path}
                            />
                        );

                    default:
                        return (
                            <Stats
                                key={index}
                                index={index}
                                id={item.id}
                                path={item.path}
                            />
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
};

export default Carousel;
