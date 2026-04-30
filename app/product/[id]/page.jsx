import { productsDummyData } from "@/assets/assets";
import ProductClient from "./ProductClient";

export async function generateStaticParams() {
    return productsDummyData.map((product) => ({
        id: product._id,
    }))
}

const Product = async ({ params }) => {
    const { id } = await params;
    return <ProductClient id={id} />
}

export default Product;