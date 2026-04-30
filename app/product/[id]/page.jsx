import { productsDummyData } from "@/assets/assets";
import ProductClient from "./ProductClient";

export async function generateStaticParams() {
    return productsDummyData.map((product) => ({
        id: product._id,
    }))
}

const Product = ({ params }) => {
    return <ProductClient id={params.id} />
}

export default Product;