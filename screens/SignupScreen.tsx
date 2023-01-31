import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/uit/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';
import { useNavigation } from '@react-navigation/native';

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const navigation = useNavigation();

    const authCtx = useContext(AuthContext);

    async function signupHandler(props: { email: any; password: any }) {
        setIsAuthenticating(true);
        try {
            const token = await createUser(props.email, props.password);
            navigation.navigate('Confirm', {
                username: token.username,
            });
            //   authCtx.authenticate(token);
        } catch (error) {
            console.log(error);
            Alert.alert(
                'Authentication failed',
                'Could not create user, please check your input and try again later.',
            );
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating user..." />;
    }

    return <AuthContent onAuthenticate={signupHandler} isLogin={false} />;
}

export default SignupScreen;
