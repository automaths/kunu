import axios from 'axios';
import { Auth } from 'aws-amplify';

// const API_KEY = 'AIzaSyDCYasArcOwcALFhIj2szug5aD2PgUQu1E';

// async function authenticate(mode, email, password) {
//   const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

//   const response = await axios.post(url, {
//     email: email,
//     password: password,
//     returnSecureToken: true,
//   });

//   const token = response.data.idToken;

//   return token;
// }

// {
//     user: CognitoUser;
//     userConfirmed: boolean;
//     userSub: string;
// }

async function aws_authenticate(mode, phone, password) {
    if (mode === 'signUp')
    {
        try {
            console.log(`When in funciton user phone ${phone}, password ${password}`);
            const { user } = await Auth.signUp({
                username: 'ns.sartral@gmail.com',
                password: 'Coucou1!',
                attributes: {
                    phone_number: '+33634162976',
                    given_name: 'Nicolas',
                    family_name: 'Sartral'
                  },
                // attributes: {
                //     email,          // optional
                //     phone_number,   // optional - E.164 number convention
                //     // other custom attributes 
                // },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(`the repsonse from the api is ${user}`);
            console.log(user);
            return user;
        } catch (error) {
            console.log('error signing up:', error);
            return null;
        }
    }
    else if (mode === 'signInWithPassword')
    {
        try {
            const user = await Auth.signIn(email, password);
            console.log(user);
        } catch (error) {
            console.log('error signing in', error);
            return null;
        }
    }
}

export function createUser(phone, password) {
    console.log(`When creating user email ${phone}, password ${password}`);
  return aws_authenticate('signUp', phone, password);
}

export function login(email, password) {
  return aws_authenticate('signInWithPassword', email, password);
}