import classes from "./Sidebar.module.css";
import { useContext } from "react";
import { AppContext } from "@/context/DataContext";

const Sidebar = () => {
    const ctx = useContext(AppContext);

    const activeTab = ctx.sharedState.activeTab;

    const changeTabHandler = (tab) => {
        ctx.sharedState.changeActiveTab(tab);
    };

    return (
        <>
        <div className={classes.sidebar}>
                <h1 className="mt-4 ml-6 text-4xl tracking-widest font-semibold">Alert</h1>
            <div onClick={() => {changeTabHandler("notifications")}} className={`mt-16 mb-10 text-md w-56 tracking-wider h-10 mr-4 hover:border-solid hover:border-r-2 hover:border-blue-500 ${activeTab === 'notifications' && 'border-solid text-blue-600 border-r-2 font-semibold border-blue-500'}`}>
                <h1><i className="fa-light text-2xl fa-bells"></i>&nbsp; &nbsp;Notifications</h1>
            </div>
            <div onClick={() => {changeTabHandler("channels")}} className={`mb-10 text-md w-56 tracking-wider h-10 mr-4 hover:border-solid hover:border-r-2 hover:border-blue-500 ${activeTab === 'channels' && 'border-solid border-r-2 font-semibold text-blue-600 border-blue-500'}`}>
                <h1><i className="fa-regular text-xl fa-compass"></i>&nbsp; &nbsp;Channels</h1>
            </div>
            <div onClick={() => {changeTabHandler("create")}} className={`mb-10 text-md w-56 tracking-wider h-10 mr-4 hover:border-solid hover:border-r-2 hover:border-blue-500 ${activeTab === 'create' && 'border-solid border-r-2 font-semibold text-blue-600 border-blue-500'}`}>
                <h1><i className="fa-regular text-xl fa-bell-plus"></i>&nbsp; &nbsp;Create Channel</h1>
            </div>
            <div onClick={() => {changeTabHandler("send")}} className={`mb-10 text-md w-56 tracking-wider h-10 mr-4 hover:border-solid hover:border-r-2 hover:border-blue-500 ${activeTab === 'send' && 'border-solid border-r-2 font-semibold text-blue-600 border-blue-500'}`}>
                <h1><i className="fa-light text-xl fa-paper-plane-top"></i>&nbsp; &nbsp;Send Notification</h1>
            </div>
        </div>
        </>
    )
};

export default Sidebar;