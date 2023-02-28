import Particle from "../Particle/Particle";
import {useRouter} from "next/router";

const LandingPage = () => {
    const router = useRouter();

    return (
        <div className="flex justify-between ml-48 mt-28">
            <div>
                <h1 className="text-5xl font-semibold mt-6 w-10/12 leading-snug">Bringing Push Notifications to Fantom Blockchain</h1>
                <p className="w-7/12 text-lg mt-6 text-slate-200">Fantom Alert enables sending notifications on fantom blockchain through any smart contract or decentralized app.</p>
                <div className="mt-12">
                    <button className="btn btn-primary w-52 mr-4" onClick={() => {router.push('/app')}}>Launch App</button>
                    <a className="link link-hover text-lg ml-2" href="https://github.com/VaibhavArora19/FantomAlert">Explore Fantom Alert</a>
                </div>
            </div>
            <div className="mr-28 relative bottom-8">
                <Particle />
            </div>
        </div>
    )
};

export default LandingPage;