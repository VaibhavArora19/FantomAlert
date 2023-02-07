import Card from "@/components/UI/Card";
import Sidebar from "@/components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="flex gap-4 ml-4">
            <Sidebar />
            <div className="mt-28 w-full ml-28">
                <Card />
            </div>
        </div>
    )
};

export default App;