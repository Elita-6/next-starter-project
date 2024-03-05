'use client'
import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "next-auth/react"




export default function SignIn(){
    const callbackUrl = "/"
    return (
        <div className='flex flex-col items-center space-y-8 '>
            <h2 className="text-4xl font-bold">.Logo</h2>
            <div className='flex flex-col space-y-3 items-center'>
                <h3 className="text-2xl font-semibold">Let`&apos`s get started</h3>
                <p className='font-light'>Sign up to the family and get stared immediately</p>
            </div>
            <div className='flex flex-col space-y-2 w-[25%]'>
                <Button
                    onClick={()=>signIn("google",{callbackUrl})}
                    variant='outline'
                    className='flex items-center space-x-3  '>
                    <Image src='google.svg' alt='google icon' width={20} height={20}/>
                    <p>Continue with google</p>
                </Button>
                <div className='flex space-x-2  justify-center items-center'>
                    <div className='h-[1px] bg-black dark:bg-white w-[40%]'/>
                    <span>Or</span>
                    <div className='h-[1px] bg-black w-[40%] dark:bg-white'/>
                </div>
                <Button
                    onClick={()=>signIn("github",{callbackUrl})}
                    variant='outline'
                    className='flex items-center space-x-3 ' >
                    <FaGithub className='w-4 h-4'/>
                    <p className=''>Continue with github</p>
                </Button>
            </div>
        </div>
    );
};
