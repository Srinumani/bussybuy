
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";
function ProtectedRoutes({component:Component,...rest}){

    const auth=getAuth();
    const isLoggedIn=auth.currentUser!==null;

    if(isLoggedIn){
        return <Navigate to="/signup"/>
    }
    return <Component {...rest}/>
}
export default ProtectedRoutes;