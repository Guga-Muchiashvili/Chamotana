'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const navigate = useRouter()

  useEffect(() => {
    navigate.push('/ka')
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
