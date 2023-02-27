import { useEffect, useState } from "react";
import { createClient } from "urql";
import { useRouter } from "next/router";
import { singleNotificationQuery } from "@/queries/queries";
import Image from "next/image";
import styles from "./NotificationDetails.module.css";

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
                    <Image src="/notification-undraw.svg" width={1000} height={1000} alt="Notification icon"/>
                </div>
                <div className="mt-28">
                    <h3 className="text-xl w-11/12 leading-7">{notification.description}</h3>
                </div>
            </div>
            <div className="mt-20">
                <h1 className="text-center m-auto border-b-4 border-blue-500 w-60 font-semibold text-3xl">Channel Details</h1>
                <div className="ml-10 mt-10">
                    <h2 className="text-2xl font-semibold border-b-4 border-blue-500 w-20">Name</h2>
                    <h3 className="mt-4 text-xl">{notification.channel.title}</h3>
                </div>
                <div className=" mt-6 ml-10">
                    <h2 className="text-2xl font-semibold border-b-4 border-blue-500 w-32">Description</h2>
                    <h3 className="mt-4 text-xl">{notification.channel.description}</h3>
                </div>
                <div className="mt-6 ml-10 flex gap-6 mb-4">
                    <h2 className="text-2xl font-semibold border-b-4 border-blue-500 w-36">Subscribers</h2>
                    <h3 className="mt-2 text-2xl">{notification.channel.totalSubscribers.length}</h3>
                </div>
            </div>
        </div>
        }
        </>
    )
};

export default NotificationDetails;