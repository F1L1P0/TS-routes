import {useParams, Link} from "react-router-dom"

export default function SingleProduct(){
    const {productId} = useParams();
    return(
        <>
            <p>{productId}</p>
            <Link to="../Products">back to products HERE</Link>
        </>
    )
}