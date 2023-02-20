import NotificationCard from "../UI/NotificationCard";
import {  useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { createClient } from "urql";
import { notificationQuery } from "@/queries/queries";

const Notifications = () => {
    const {address} = useAccount();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {   
        if(address) {
            (async function(){
                const client = createClient({url: 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter'});
                const getNotifications = await client.query(notificationQuery, {id: address.toLowerCase()}).toPromise();
                setNotifications(getNotifications.data.notifications);
            })();
        }

    }, [address]);

    return (
        <div>
            {notifications.length > 0 && notifications.map(notification => {
                return <NotificationCard key={notification.id} id={notification.id} title={notification.title} channelName={notification.channel.title} owner={notification.channel.owner} subscribers={notification.subscribers}/>
            })}
        </div>
    )
};

export default Notifications;