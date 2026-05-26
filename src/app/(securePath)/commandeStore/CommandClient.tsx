"use client";

import { notFound, useSearchParams } from "next/navigation";
import { ArticleType, dataArticle } from "@/app/components/m2kgroup/store/dataArticle";
import CommandForm from "./CommandForm";
import NotFoundProduct from "./NotFoundProduct";


export default  function ClientCommandeStore() {
  const searchParams = useSearchParams();


  const productId = searchParams.get("productId");

  if (!productId) return notFound();

  
  const found = dataArticle.find((item:ArticleType) => (item.id as number) === Number(productId));


  if (!found) {
    return <NotFoundProduct />;
  }

  return <CommandForm product={found} />;
}