import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { createClient } from "urql";
import { subscribedChannelsQuery } from "@/queries/queries";
import Card from "../UI/Card";

const SubscribedChannels = () => {
    const {address} = useAccount();
    const [channels, setChannels] = useState([]);

    useEffect(() => {

        if(address) {
            (async function() {

                const client = createClient({
                    url: 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter'
                });

                const getSubscribedChannels = await client.query(subscribedChannelsQuery, {id: address}).toPromise();

                console.log('getSubscribedChannels', getSubscribedChannels.data.channels);
                setChannels(getSubscribedChannels.data.channels);
            })();
        }

    }, [address]);

    return (
        <div>
            {channels && channels.map(channel => {
                return <Card key={channel.id} id={channel.id} name={channel.title} description={channel.description} owner={channel.owner} subscribers={channel.totalSubscribers}/>
            })}
        </div>
    )
};

export default SubscribedChannels;