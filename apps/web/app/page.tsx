"use client"
import { trpc } from "~/trpc/client";

export default function Home() {
    // const { status } = await api.health.getHealth.query();
    const { data } = trpc.chaicode.useQuery({ email: "pallab@studyhex.in" })
    return (
        <main className="min-h-screen min-w-screen flex justify-center items-center">
            <div>
                <h2>{data?.message}</h2>
            </div>
        </main>
    );
}
