import NotificationDetails from "@/components/Notifications/NotificationDetails";
import { useRouter } from "next/router";

const NotificationPage = () => {
    const router = useRouter();

    return (
    <div>
        <div className="flex gap-2 ml-4" onClick={() => {router.push('/app')}}>
            <div className="mt-6 ml-4 cursor-pointer inline-block">
                <h1><i className="fa-regular fa-arrow-left fa-2x"></i></h1>
            </div>
            <div className="ml-20 mt-10 w-full">
                <NotificationDetails />
            </div>
        </div>
    </div>
    )
};

export default NotificationPage;