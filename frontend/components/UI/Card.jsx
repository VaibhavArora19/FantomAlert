import Image from "next/image";
import { Button } from "@mui/material";
import { useContract, useSigner, useAccount } from "wagmi";
import {contractAddress, ABI} from "@/constants";
import { useEffect, useState } from "react";

const Card = (props) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const {data: signer} = useSigner();
    const contract = useContract({
        address: contractAddress,
        abi: ABI,
        signerOrProvider: signer
    });
    const {address} = useAccount();
    const cardBorder = {
        borderBottom: "2px solid #E5E7EB",
    }

    useEffect(() => {
        if(address) {

            const user = props.subscribers.filter((subscriber) => {return subscriber.id.toLowerCase() === address.toLowerCase()});
            if(user.length > 0) {
                setIsSubscribed(true);
            }
        }
    }, [address]);
    const subscribeChannelHandler = async () => {
        if(isSubscribed) return;
        await contract.subscribe(props.id);
    }

    return (
        <div style={cardBorder} className="flex justify-between ml-4 mt-6 mr-4">
            <div className="flex gap-8 pl-8">
                <div>
                    <Image src="/icon.png" className="border-2 mt-4 rounded-2xl" width={64} height={64} alt="channels Image"/>
                </div>
                <div className="mb-6">
                    <h1 className="text-2xl pt-4 text-slate-700 leading-4 font-semibold">{props.name}</h1>
                    <p className="mt-2 w-10/12">{props.description}</p>
                    <div className="flex gap-3">
                        <p className="mt-6 ml-2 tracking-wide w-20 h-6 bg-blue-300 font-medium text-center rounded-lg text-blue-500"><i className="fa-light fa-user"></i>&nbsp;&nbsp;{props.subscribers.length}</p>
                        <p className="mt-6 ml-2 tracking-wide w-36 bg-slate-200 rounded-lg text-center text-slate-600">By: {props.owner.substr(0, 5)+ "..."+props.owner.substr(37,42)}</p>
                    </div>
                </div>
            </div>
            <div className="pr-8 pt-10">
                <Button variant="contained" onClick={subscribeChannelHandler}>{isSubscribed ? "Subscribed": "Subscribe"}</Button>
            </div>
        </div>
    )
};

export default Card;
