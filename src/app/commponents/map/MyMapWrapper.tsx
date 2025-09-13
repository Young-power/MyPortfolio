"use client";

import dynamic from "next/dynamic";

const MyMap = dynamic(() => import("./MyMap"), { ssr: false });

export default function MyMapWrapper() {
    return <MyMap />;
}
