import classes from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <>
        <div className={classes.sidebar}>
                <h1 className="mt-4 ml-6 text-4xl tracking-widest font-semibold">Alert</h1>
            <div className="mt-16 mb-10 text-md w-56 tracking-wider h-12 mr-4">
                <h1><i className="fa-light text-2xl fa-bells"></i>&nbsp; &nbsp;Notifications</h1>
            </div>
            <div className="mb-10 text-md w-56 tracking-wider h-12 mr-4">
                <h1><i className="fa-regular text-xl fa-compass"></i>&nbsp; &nbsp;Channels</h1>
            </div>
            <div className="mb-10 text-md w-56 tracking-wider h-12 mr-4">
                <h1><i className="fa-regular text-xl fa-bell-plus"></i>&nbsp; &nbsp;Create Channel</h1>
            </div>
            <div className="mb-10 text-md w-56 tracking-wider h-12 mr-4">
                <h1><i className="fa-light text-xl fa-paper-plane-top"></i>&nbsp; &nbsp;Send Notification</h1>
            </div>
        </div>
        </>
    )
};

export default Sidebar;