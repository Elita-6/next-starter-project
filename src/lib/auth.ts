import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const handlers= NextAuth({
    //todo: separate this in auth.config file
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            clientId: process.env.GITHUB_CLIENT_ID as string,
            id:"github"
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            id:"google"
        }),
        CredentialsProvider({
            id:"credentials",
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
    pages: {
        signIn: "/signin",
    },
})
