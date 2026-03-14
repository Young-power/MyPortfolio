"use client";

import { notFound, useSearchParams } from "next/navigation";
import { dataArticle } from "@/app/components/m2kgroup/store/dataArticle";
import CommandForm from "./CommandForm";
import NotFoundProduct from "./NotFoundProduct";


export default async function ClientCommandeStore() {
  const searchParams = useSearchParams();


  const productId = searchParams.get("productId");
  if (!productId) return notFound();

  const found = dataArticle.find((item) => item.id === Number(productId));


  if (!found) {
    return <NotFoundProduct />;
  }

  return <CommandForm product={found} />;
}