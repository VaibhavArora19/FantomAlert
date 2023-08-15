import Card from "../UI/Card";
import { useEffect, useState } from "react";
import { contractAddress, ABI } from "@/constants";
import { useContract, useSigner, useAccount } from "wagmi";
import { channelQuery } from "@/queries/queries";
import {createClient} from "@urql/core";

const Channels = () => {
    const [channels, setChannels] = useState([]);
    const {data: signer} = useSigner();
    const contract = useContract({
        address: contractAddress,
        abi: ABI,
        signerOrProvider: signer
    });
    const { address } = useAccount();


    useEffect(() => {

        (async function() {
            const client = createClient({
                url: 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter'
            });

            const getChannels = await client.query(channelQuery).toPromise();
            setChannels(getChannels.data.channels.slice(2, getChannels.data.channels.length))
        })()

    }, []);

    return (
        <div>
            {channels.length > 0 && channels.map((channel) => {
                return <Card key={channel.id} id={channel.id} name={channel.title} description={channel.description} owner={channel.owner} subscribers={channel.totalSubscribers}/>
            })}
        </div>
    )
};

export default Channels;