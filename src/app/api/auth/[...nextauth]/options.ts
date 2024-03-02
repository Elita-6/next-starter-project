import type {NextAuthOptions} from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options:NextAuthOptions ={
    providers:[
        GitHubProvider({
            clientSecret: process.env.GITHUB_SECRETE as string,
            clientId: process.env.GITHUB_ID as string
        }),
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                username: {
                    label:"Username",
                    type:"text",
                    placeholder: "your-cool-username"
                },
                password:{
                    label:"Password",
                    type:"text",
                    placeholder: "your-cool-password"
                }
            },
            async authorize(credentials){
                const users = {id:"21",name:"Dave",password:"admin"}
                if(credentials?.username==users.name && credentials?.password == users.password){
                    return users
                }else{
                    return null
                }
            }
        })
    ],
    secret:process.env.NEXT_AUTH_SECRET,
}