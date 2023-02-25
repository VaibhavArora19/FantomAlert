import {useRef, useEffect, useState} from 'react';
import { useContract, useAccount, useSigner} from "wagmi";
import { ABI, contractAddress } from '@/constants';
import { createClient } from 'urql';
import { ownedChannelQuery } from '@/queries/queries';

const NotificationForm = () => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const subscribersRef = useRef();
    const {address} = useAccount();
    const {data: signer} = useSigner();
    const contract = useContract({
        abi: ABI,
        contract: contractAddress,
        signerOrProvider: signer
    })
    const [ownedChannel, setOwnedChannel] = useState();

    useEffect(() => {

        if(address) {
            (async function() {
                const client = createClient({
                    url: 'https://api.thegraph.com/subgraphs/name/vaibhavarora19/getter'
                });

                const channelDetails = await client.query(ownedChannelQuery, {id: address.toLowerCase()}).toPromise();
                setOwnedChannel(channelDetails.data.channels[0]);
            })();
        }

    }, [address]);

    const sendNotificationHandler = (event) => {
        event.preventDefault();

        const subscribers = subscribersRef.current.value.split(',');
    };


    return (
        <div>
            <div className="mt-16 w-42">
                <h1 className="text-3xl text-center tracking-medium">Send Notification</h1>
            </div>
            <div className="flex justify-around mt-10">
                <div className="bg-blue-100 w-2/12 h-8 rounded-xl text-center">
                    <h3 className="text-blue-500 text-lg font-medium">Channel ID: {ownedChannel && ownedChannel.id}</h3>
                </div>
                <div className="bg-pink-100 w-2/12 h-8 rounded-xl text-center">
                    <h3 className="text-pink-500 text-lg font-medium">{ownedChannel && ownedChannel.title}</h3>
                </div>
            </div>
            <div className="mt-8 ml-64">
                <form onSubmit={sendNotificationHandler}>
                <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Title</span>
                    </label>
                    <input type="text" placeholder="Notification Title" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300" ref={titleRef}/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Description</span>
                    </label>
                    <textarea type="text" rows="4" placeholder="Add a short description" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg pt-2 focus:outline-0 focus:border-blue-300"ref={descriptionRef}/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Subscribers</span>
                    </label>
                    <input type="text" placeholder="Add multiple subscribers seperated by comma" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300" ref={subscribersRef}/>
                    <button className="btn btn-info btn-wide block text-white ml-60 mt-12">Send Notification</button>
                </form>
            </div>
        </div>
    )
};

export default NotificationForm;