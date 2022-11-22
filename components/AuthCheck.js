import Link from "next/link";
import AdminLogin from "./AdminLogin";
import { useAuth } from "../lib/adminAuth";
import { useRouter } from "next/router";

const AuthCheck  = (props) => {

    const {currentUser} = useAuth();
    const router = useRouter();


    if(!currentUser){
        router.push("login")
        return 
    }
    return props.children;


};



export default AuthCheck;

function redirectToLogin(){
    
}