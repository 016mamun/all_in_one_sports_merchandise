import { Suspense } from "react";
import ProductDetailsSkeleton from "./productSkeleton";
import ProductDetailsContent from "./productDetails";

type ParamProps = Promise<{
  id: string;
}>

export default async function ProductDetailsPage(props: { params: ParamProps }) {
  const  { id } = await props.params

  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetailsContent id={id} />
    </Suspense>
  );
}