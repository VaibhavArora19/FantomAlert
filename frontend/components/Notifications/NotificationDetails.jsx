import { useEffect, useState } from "react";
import { createClient } from "urql";
import { useRouter } from "next/router";
import { singleNotificationQuery } from "@/queries/queries";
import Image from "next/image";

const NotificationDetails = () => {
    const [notification, setNotification] = useState({});
    const router = useRouter();
    const {notificationId} = router.query;

    useEffect(() => {

        (async function() {
            const client = createClient({url: 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter'});
            const getSingleNotifications = await client.query(singleNotificationQuery, {id: notificationId}).toPromise(); 
            setNotification(getSingleNotifications.data.notifications[0]);
        })();

    }, []);
    return (
        <>
        {
        notification && <div>
            <h1>{notification.title}</h1>
            <div>
                <Image src="/bell.jpg" width={240} height={240} alt="Notification icon"/>
            </div>
        </div>
        }
        </>
    )
};

export default NotificationDetails;