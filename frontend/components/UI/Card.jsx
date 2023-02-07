import Image from "next/image";

const Card = () => {
    const cardBorder = {
        borderBottom: "2px solid #E5E7EB",
    }

    return (
        <div style={cardBorder} className="flex gap-6">
            <div className="flex gap-8">
                <div>
                    <Image src="/bell.jpg" className="border-2 rounded-2xl" width={74} height={74}/>
                </div>
                <div className="mb-6">
                    <h1 className="text-xl tracking-widest font-medium">Channel Name</h1>
                    <p className="mt-2 ">Channel description</p>
                    <div className="flex gap-3">
                        <p className="mt-6 ml-2 tracking-wide"><i className="fa-light fa-user"></i>&nbsp;&nbsp;114</p>
                        <p className="mt-6 ml-2 tracking-wide">By: 0xa6d...9a1f</p>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-info text-white">Subscribe</button>
            </div>
        </div>
    )
};

export default Card;
