import NotificationDetails from "@/components/Notifications/NotificationDetails";
import Sidebar from "@/components/Sidebar/Sidebar";

const NotificationPage = () => {
    return (
    <div>
        <div className="flex gap-4 ml-4">
            <Sidebar />
            <div className="ml-72 mt-10 w-full">
                <NotificationDetails />
            </div>
        </div>
    </div>
    )
};

export default NotificationPage;