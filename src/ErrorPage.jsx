import { useRouteError } from "react-router-dom";

function ErrorElement(){
    const error = useRouteError();
    console.error(error)

    return(
    <>
    <h1>Ooops!</h1>
    <h1>Unxpected Error has occured.Please try again later.</h1>
    <p>
    <i>{error.statusText || error.message}</i>
    </p>
    </>
    )
}
export default ErrorElement;
