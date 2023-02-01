import Button from "../components/uit/Button";
import { useNavigation } from '@react-navigation/native';

const StartButton = () => {
    const navigation = useNavigation();
    return (

        <Button onPress={() => {navigation.navigate('Welcome', {coucou:'coucou'})}}>Go to App</Button>
    );
}


export default StartButton;