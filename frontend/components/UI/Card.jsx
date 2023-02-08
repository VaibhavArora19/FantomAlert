import Image from "next/image";
import { Button } from "@mui/material";

const Card = () => {
    const cardBorder = {
        borderBottom: "2px solid #E5E7EB",
    }

    return (
        <div style={cardBorder} className="flex justify-between ml-4 mt-6 mr-4">
            <div className="flex gap-8 pl-8">
                <div>
                    <Image src="/bell.jpg" className="border-2 mt-4 rounded-2xl" width={74} height={74}/>
                </div>
                <div className="mb-6">
                    <h1 className="text-xl tracking-widest font-medium">Channel Name</h1>
                    <p className="mt-2 w-10/12">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words  </p>
                    <div className="flex gap-3">
                        <p className="mt-6 ml-2 tracking-wide"><i className="fa-light fa-user"></i>&nbsp;&nbsp;114</p>
                        <p className="mt-6 ml-2 tracking-wide">By: 0xa6d...9a1f</p>
                    </div>
                </div>
            </div>
            <div className="pr-6 pt-10">
                <Button variant="contained">Subscribe</Button>
            </div>
        </div>
    )
};

export default Card;
