import Image from "next/image";
import { Button } from "@mui/material";

const NotificationCard = () => {

    const cardBorder = {
        borderBottom: "2px solid #E5E7EB",
    }

    return (
        <div style={cardBorder} className="flex justify-between ml-4 mt-6 mr-4">
        <div className="flex gap-8 pl-8">
            <div>
                <Image src="/notification.png" className="border-2 mt-4 rounded-2xl" width={60} height={60}/>
            </div>
            <div className="mb-6">
                    <h1 className="text-xl tracking-widest font-medium">Channel Name</h1>
                    <p className="mt-2 text-md">Regarding the Shanghai mainnet Upgrade</p>
                    <div className="flex gap-3">
                        <p className="mt-6 ml-2 tracking-wide w-20 h-6 bg-blue-300 font-medium text-center rounded-lg text-blue-500"><i className="fa-light fa-user"></i>&nbsp;&nbsp;114</p>
                        <p className="mt-6 ml-2 tracking-wide w-36 bg-slate-200 rounded-lg text-center text-slate-600">By: 0xa6d...9a1f</p>
                    </div>
                </div>
        </div>
        <div className="pr-6 pt-10">
                <Button variant="contained" color="secondary">View More</Button>
            </div>
        </div>
    )
};

export default NotificationCard;