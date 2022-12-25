import {Link} from "react-router-dom"

export default function Error(){
    return(
        <>
         <h1>ERROR 404 PAGE NOT FOUND</h1>
         <p>Go back to <Link to="./" className="error__navigate-btn">HOME</Link> page</p>
        </>
    )
}