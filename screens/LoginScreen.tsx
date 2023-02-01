import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/uit/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    const navigation = useNavigation();

    async function loginHandler(props: { email: any; password: any }) {
        setIsAuthenticating(true);
        try {
            const token = await login(props.email, props.password);
            console.log('the token sent back at the sign in is ');
            console.log(token);
            if (token !== null)
                navigation.navigate('Welcome', {coucou: 'coucou'});
            //   authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Authentication failed!',
                'Could not log you in. Please check your credentials or try again later!',
            );
        }
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging you in..." />;
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
