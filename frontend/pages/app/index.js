import Card from "@/components/UI/Card";
import Sidebar from "@/components/Sidebar/Sidebar";
import ChannelForm from "@/components/ChannelForm/ChannelForm";
import { useContext } from "react";
import { AppContext } from "@/context/DataContext";

const App = () => {
    const ctx = useContext(AppContext);

    const channels = {
        borderTop: "1px solid white",
        borderLeft: "1px solid white",
        borderRadius: "20px 0 0 0",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }

    return (
        <div className="flex gap-4 ml-4">
            <Sidebar />
            <div className="ml-64 w-full">
            { ctx.sharedState.activeTab === "channels" ?
                <div style={channels} className="mt-28">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                : ctx.sharedState.activeTab === "create" ?
                <div className="mt-28 h-full" style={channels}>
                    <ChannelForm />
                </div>
                : ctx.sharedState.activeTab === "notifications" ?
                <div>
                </div>
                :
                <div>
                </div>   
            }
        </div>
        </div>
    )
};

export default App;