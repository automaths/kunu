import {Text} from "react-native";

const PhotoDetails = (props: {route:any}) => {
    return (
        <Text>Coucou {props.route.params.id}</Text>
    )
}

export default PhotoDetails;