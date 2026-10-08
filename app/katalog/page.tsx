import { Suspense } from "react";
import CatalogTemplate from "@/components/templates/CatalogTemplate";

export default function CatalogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CatalogTemplate />
    </Suspense>
  );
}