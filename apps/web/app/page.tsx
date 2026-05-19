"use client"

import { useEffect } from "react";
import { useUser } from "~/hooks/api/auth";
import { useRouter } from "next/navigation"


export default function Home() {
    const router = useRouter();

    const { user, isLoading } = useUser();

    useEffect(() => {
        if (user && user.id) {

            router.replace("/dashboard")
        }
        else {
            router.replace("/signin")
        }
    }, [user])
    return (

        <main className="min-h-screen min-w-screen flex justify-center items-center">
            <div>
                <h1>Landing Page here</h1>
            </div>
        </main>
    );
}
