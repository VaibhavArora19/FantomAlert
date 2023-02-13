const NotificationForm = () => {
    return (
        <div>
            <div className="mt-16 w-42">
                <h1 className="text-3xl text-center tracking-medium">Send Notification</h1>
            </div>
            <div className="flex justify-around mt-10">
                <div className="bg-blue-100 w-2/12 h-8 rounded-xl text-center">
                    <h3 className="text-blue-500 text-lg font-medium">Channel ID: 12</h3>
                </div>
                <div className="bg-pink-100 w-1/12 h-8 rounded-xl text-center">
                    <h3 className="text-pink-500 text-lg font-medium">Audible</h3>
                </div>
            </div>
            <div className="mt-8 ml-64">
                <form>
                <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Title</span>
                    </label>
                    <input type="text" placeholder="Notification Title" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300"/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Description</span>
                    </label>
                    <textarea type="text" rows="4" placeholder="Add a short description" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg pt-2 focus:outline-0 focus:border-blue-300"/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Subscribers</span>
                    </label>
                    <input type="text" placeholder="Add multiple subscribers seperated by comma" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300"/>
                    <button className="btn btn-info btn-wide block text-white ml-60 mt-12">Send Notification</button>
                </form>
            </div>
        </div>
    )
};

export default NotificationForm;