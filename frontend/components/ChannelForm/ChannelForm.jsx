import { useRef } from "react";
import { useContract, useSigner } from "wagmi";
import { contractAddress, ABI } from "@/constants";
import { utils } from "ethers";

const ChannelForm = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const {data:signer} = useSigner();
    const contract = useContract({
        abi: ABI,
        address: contractAddress,
        signerOrProvider: signer
    })

    const createChannelHandler = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;

        await contract.createChannel(name, description, {value: utils.parseEther("0.001")});
    }

    return (
        <div>
            <div className="mt-16 w-42">
                <h1 className="text-4xl text-center tracking-wide">Create Channel</h1>
                <p className="text-center text-md tracking-tight pt-4">Creating a channel requires 0.001 FTM and can only be done once per address.</p>
            </div>
            <div className="mt-8 ml-64">
                <form onSubmit={createChannelHandler}>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Name</span>
                    </label>
                    <input type="text" placeholder="Channel name" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 focus:outline-0 focus:border-blue-300" ref={nameRef}/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Network</span>
                    </label>
                    <input type="text" placeholder="Fantom Testnet" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg h-12 input-disabled focus:outline-0 focus:border-blue-300" disabled/>
                    <label className="block mt-4 mb-2">
                        <span className="text-md font-small">Description</span>
                    </label>
                    <textarea type="text" rows="4" placeholder="Add a short description" className="pl-4 w-9/12 border-slate-300 border-2 rounded-lg pt-2 focus:outline-0 focus:border-blue-300" ref={descriptionRef}/>
                    <button className="btn btn-info btn-wide block text-white ml-60 mt-12">Create Channel</button>
                </form>
            </div>
        </div>
    )
};

export default ChannelForm;