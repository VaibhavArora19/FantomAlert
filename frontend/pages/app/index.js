import Card from "@/components/UI/Card";
import Sidebar from "@/components/Sidebar/Sidebar";

const App = () => {
    const channels = {
        borderTop: "1px solid white",
        borderLeft: "1px solid white",
        borderRadius: "20px 0 0 0",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    }

    return (
        <div className="flex gap-4 ml-4">
            <Sidebar />
            <div style={channels} className="mt-28 ml-64 w-full">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
};

export default App;