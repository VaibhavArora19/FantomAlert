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
    const [isLoading, setIsLoading] = useState(false);
    const [allSubscribers, setAllSubscribers] = useState(false);
    const {data: signer} = useSigner();
    const contract = useContract({
        abi: ABI,
        address: contractAddress,
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

    const sendNotificationHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        if(allSubscribers) {
            await contract?.notificationForAll(ownedChannel.id, titleRef.current.value, descriptionRef.current.value);
            setIsLoading(false);
            return;
        }

        const totalSubscribers = subscribersRef.current.value.split(',');
        
        let subscribers = totalSubscribers.map(subscriber => {
            return subscriber.trim();
        })

        if(!allSubscribers) {
            if(subscribers.length === 1){
                await contract?.notificationForSingle(ownedChannel.id, subscribers[0], titleRef.current.value, descriptionRef.current.value);
            }else {
                await contract?.notificationForMultiple(ownedChannel.id, subscribers, titleRef.current.value, descriptionRef.current.value);
            }
        }
        setIsLoading(false);
    };


    return (
        <div>
            <div className="mt-16 w-42">
                <h1 className="text-3xl text-center">Send Notification</h1>
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
                    <input type="text" placeholder="Notification Title" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300" ref={titleRef} required/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Description</span>
                    </label>
                    <textarea type="text" rows="4" placeholder="Add a short description" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg pt-2 focus:outline-0 focus:border-blue-300"ref={descriptionRef} required/>
                    {!allSubscribers && <>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Subscribers</span>
                    </label>
                    <input type="text" placeholder="Add multiple subscribers seperated by comma" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300" ref={subscribersRef}/>
                    </>
                    }
                    <div className='flex gap-10'>
                    <div className='flex gap-2 mt-6'>
                        <input type="radio" name="radio-2" className="radio radio-info" onClick={() =>{setAllSubscribers(false)}} checked/>
                        <p>Send to selected subscribers</p>
                    </div>
                    <div className='flex gap-2 mt-6'>
                        <input type="radio" name="radio-2" className="radio radio-info" onClick={() =>{setAllSubscribers(true)}} />
                        <p>Send to all subscribers</p>
                    </div>
                    </div>
                    <button className={`btn btn-info btn-wide block text-white ml-60 mt-12`}>{isLoading ? "Sending Notification" : "Send Notification"}</button>
                </form>
            </div>
        </div>
    )
};

export default NotificationForm;