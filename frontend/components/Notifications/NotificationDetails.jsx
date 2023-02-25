import { useEffect, useState } from "react";
import { createClient } from "urql";
import { useRouter } from "next/router";
import { singleNotificationQuery } from "@/queries/queries";
import Image from "next/image";

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
        notification && <div>   
            <h1 className="text-3xl text-center font-medium">{notification.title}</h1>
            <div className="flex gap-96">
                <div>
                    <Image src="/bell.jpg" width={240} height={240} alt="Notification icon"/>
                </div>
                <div className="mt-20">
                    <h3>{notification.description}</h3>
                </div>
            </div>
            <div>
                <h1>Channel Details</h1>
                <div>
                    <h2>Title</h2>
                    <h3>{notification.channel.title}</h3>
                </div>
                <div>
                    <h2>Description</h2>
                    <h3>{notification.channel.description}</h3>
                </div>
                <div>
                    <h2>Subscribers</h2>
                    <h3>{notification.channel.totalSubscribers.length}</h3>
                </div>
            </div>
        </div>
        }
        </>
    )
};

export default NotificationDetails;