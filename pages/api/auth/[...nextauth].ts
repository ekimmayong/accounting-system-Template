import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';
import { ILoginCredential } from '@/types';
import { error } from 'console';

export default NextAuth({
    providers: [
        CredentialProvider({
            name:'Credentials',
            credentials: {},
            async authorize(credentials, req) {
                const { username, password } = credentials as ILoginCredential
                
                const res = await fetch('https://restful-booker.herokuapp.com/auth', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                });

                const user = res.json();

                if(res.ok && user){
                    return user
                }else{
                    throw error();
                }
            },
        })
    ],
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async jwt({token, user}){
            return { ...token, ...user}
        }
    }
})