import {Link} from "react-router-dom"
// @ts-ignore
import products from "../data/productsData" 

type Product = {
    id?: number;
    name?: number|string;
    img?: string;
}

const allProducts = products.map((product: Product)=>{
    return <p key={product.id}>i am product {product.name} and my img is {product.img} Click on <Link to={`./${product.id}`}> ME</Link> to access</p>})


export default function Products(){
    return(
        <>
            <p>i am the products site</p>
            {allProducts}
        </>
    )
}