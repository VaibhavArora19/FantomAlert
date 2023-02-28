import { useEffect, useState } from "react";
import { createClient } from "urql";
import { useRouter } from "next/router";
import { singleNotificationQuery } from "@/queries/queries";
import Image from "next/image";
import styles from "./NotificationDetails.module.css";
import Window from "./Window";

const NotificationDetails = () => {
    const [notification, setNotification] = useState();
    const router = useRouter();
    const {notificationId} = router.query;

    useEffect(() => {

        (async function() {
            const client = createClient({url: 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter'});
            const getSingleNotifications = await client.query(singleNotificationQuery, {id: notificationId}).toPromise(); 
            console.log(getSingleNotifications.data.notifications[0])
            setNotification(getSingleNotifications.data.notifications[0]);
        })();

    }, []);
    return (
        <>
        {
        notification && <div className={`w-11/12`}>   
            <h1 className="text-3xl text-center m-auto font-semibold border-b-4 border-blue-500 w-52">{notification.title}</h1>
            <div className="flex gap-40">
                <div className="mt-20">
                    <Image src="/notification-undraw.svg" width={920} height={920} alt="Notification icon"/>
                </div>
                <div className="mt-28">
                    <Window description={notification.description}/>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center m-auto border-b-4 border-blue-500 w-60 font-semibold text-3xl">Channel Details</h1>
                <div className="hero mt-28 mb-20 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                     <img src="/background.webp" className="max-w-sm rounded-lg shadow-2xl mr-6" />
                         <div>
                            <h1 className="text-5xl font-bold">{notification.channel.title}</h1>
                                <p className="py-6">{notification.channel.description}</p>
                            <button className="btn btn-primary">{notification.channel.totalSubscribers.length +" subscribers"}</button>
                </div>
            </div>
            </div>
            </div>
        </div>
        }
        </>
    )
};

export default NotificationDetails;