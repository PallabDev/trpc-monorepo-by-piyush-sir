"use client"

import { trpc } from "~/trpc/client";
import { api } from "~/trpc/server";


export default  function Home() {
    // const { status } = await api.health.getHealth.query();
    const data= trpc.health.getHealth.useQuery()
    return (
        <main className="min-h-screen min-w-screen flex justify-center items-center">
            <div>
                <h2>{data.status}</h2>
            </div>
        </main>
    );
}
