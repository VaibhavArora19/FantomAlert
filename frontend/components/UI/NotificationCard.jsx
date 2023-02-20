import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

const NotificationCard = (props) => {
    const router = useRouter();

    const cardBorder = {
        borderBottom: "2px solid #E5E7EB",
    }

    return (
        <div style={cardBorder} className="flex justify-between ml-4 mt-6 mr-4">
        <div className="flex gap-8 pl-8">
            <div>
                <Image src="/notification.png" className="border-2 mt-4 rounded-2xl" width={60} height={60} alt="Bell Icon"/>
            </div>
            <div className="mb-6">
                    <h1 className="text-xl tracking-widest font-medium">{props.channelName}</h1>
                    <p className="mt-2 text-md">{props.title}</p>
                    <div className="flex gap-3">
                        <p className="mt-6 ml-2 tracking-wide w-20 h-6 bg-blue-300 font-medium text-center rounded-lg text-blue-500"><i className="fa-light fa-user"></i>&nbsp;&nbsp;{props.subscribers.length}</p>
                        <p className="mt-6 ml-2 tracking-wide w-36 bg-slate-200 rounded-lg text-center text-slate-600">By: {props.owner.substr(0, 5)+ "..."+props.owner.substr(37,402)}</p>
                    </div>
                </div>
        </div>
        <div className="pr-6 pt-10">
                <Button variant="contained" color="secondary" onClick={() => {router.push(`/notification/${props.id}`)}}>View More</Button>
            </div>
        </div>
    )
};

export default NotificationCard;