'use client'
import React from 'react';
import {useSession} from "next-auth/react";

const ExampleComponent = () => {
    const session = useSession()
    return (
        <div>
            {
                session.data && (
                    <p>{session.data.user?.name}</p>
                )
            }
        </div>
    );
};

export default ExampleComponent;