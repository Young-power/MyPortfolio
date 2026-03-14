import { Suspense } from "react";
import CommandClient from "./CommandClient";
import LoadingSearch from "@/util/LoadingSearch";

export default function Page() {
  return (
    <Suspense fallback={<><LoadingSearch /></>}>
      <CommandClient />
    </Suspense>
  );
}