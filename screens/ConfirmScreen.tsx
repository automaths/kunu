import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';
import { StyleSheet, View } from 'react-native';
import { login } from '../util/auth';
import { Auth } from 'aws-amplify';
import Input from '../components/Auth/Input';
import FlatButton from '../components/uit/FlatButton';
import Button from '../components/UI/Button';
import { useNavigation } from '@react-navigation/native';

function ConfirmScreen(props: {route:any}) {

    const navigation = useNavigation();
    async function confirmSignUp(route:any, code:any) {

        // const authCtx = useContext(AuthContext);
        console.log(`function confirm sign up ${route.params.username}, ${code}`)    
        try {
            const token = await Auth.confirmSignUp(route.params.username, code, { forceAliasCreation: false });
            console.log('return of the confirm ');
            console.log(token);
            navigation.navigate('StartButton', {coucou:'coucou'});            
            // authCtx.authenticate(token);
    
        } catch (error) {
            console.log('error confirming sign up', error);
            navigation.navigate('StartButton', {coucou:'coucou'});            
        }
    }
    
    async function resendConfirmationCode(props: {username:any}) {
        try {
            await Auth.resendSignUp(props.username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    const [code, setCode] = useState('coucou')

    const updateCode = (event:any) => {
        setCode(event);
    }

    return (
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Input
                    label="Enter confirmation code"
                    onUpdateValue={updateCode}
                    value={code}
                    keyboardType="phone-pad" secure={undefined} isInvalid={undefined}                />
            </View>
            <View style={{flex:1}}>
                <FlatButton onPress={() => {confirmSignUp(props.route, code )}}>
                    Confirm
                </FlatButton>
            </View>
            <View style={{flex:1}}>
                <FlatButton onPress={resendConfirmationCode}>
                    Resend confirmation code
                </FlatButton>
            </View>
        </View>
    );
}

export default ConfirmScreen;

const styles = StyleSheet.create({
    buttons: {
        marginTop: 12,
    },
});
