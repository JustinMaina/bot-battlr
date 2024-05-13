
import { useRouteError } from "react-router-dom"

function ErrorPage(){
    const error = useRouteError()
    console.log(error);

    return(
        <div>
            <h1>Oops! Looks like something went wrong...</h1>
        </div>
    )
}
export default ErrorPage
