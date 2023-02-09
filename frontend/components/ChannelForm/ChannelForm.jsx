const ChannelForm = () => {
    return (
        <div>
            <div className="mt-16 w-42 ml-80">
                <h1 className="text-4xl tracking-tight">Create Channel</h1>
            </div>
            <div className="mt-10 ml-44">
                <form>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Name</span>
                    </label>
                    <input type="text" placeholder="Channel name" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12"/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Name</span>
                    </label>
                    <input type="text" placeholder="Channel name" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12"/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Description</span>
                    </label>
                    <textarea type="text" rows="4" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg"/>
                    <button className="btn btn-info btn-wide block text-white ml-60 mt-12">Create Channel</button>
                </form>
            </div>
        </div>
    )
};

export default ChannelForm;