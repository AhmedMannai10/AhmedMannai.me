
import AdminDashboard from "../../components/AdminDashboard";
import AuthCheck from "../../components/AuthCheck";

export default function AdminPage(){

    return (
        <main>
            <AuthCheck>

                <AdminDashboard/>
                <CreateNewPost/> 
            </AuthCheck>
        </main>
    );

}

function CreateNewPost(){
    return <>
        Create Posts;
    </>;
}