"use client"

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

const AccountContent = () => {
    const router = useRouter();

    const { isLoading, subscription, user } = useUser();
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        if (!isLoading && !user) {
            router.replace('/');
        }
    }, [isLoading, user, router]);

  return (
    <div className="px-6">
        <p>Hi there <span className="font-semibold underline">{user?.id}</span>!</p>
        <p>You are currently logged on <span className="font-semibold underline">{user?.email}</span>!</p>
    </div>
  )
}

export default AccountContent