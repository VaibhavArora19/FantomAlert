import Particle from "../Particle/Particle";

const LandingPage = () => {
    return (
        <div className="flex justify-between ml-48 mt-28">
            <div>
                <h1 className="text-5xl font-semibold w-8/12 leading-snug">Bringing Notifications to Fantom Blockchain</h1>
                <p className="w-7/12 text-lg mt-6">Fantom Alert enables sending notifications on fantom blockchain through any smart contract or decentralized app.</p>
                <div className="mt-12">
                    <button className="btn btn-primary w-52 mr-4">Launch App</button>
                    <button className="btn btn-outline">Explore Fantom Alert</button>
                </div>
            </div>
            <div className="mr-28 relative bottom-8">
                <Particle />
            </div>
        </div>
    )
};

export default LandingPage;