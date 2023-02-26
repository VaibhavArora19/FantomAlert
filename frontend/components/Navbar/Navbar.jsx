import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="flex justify-around pt-6">
            <div className="cursor-pointer" onClick={() => {return router.push("/")}}>
                <h1 className="text-2xl tracking-wider font-semibold mt-1">Fantom Alert</h1>
            </div>
            <div className="cursor-pointer" onClick={() => {router.push("/docs")}}>
                <h1 className="text-xl tracking-wider mt-1">Docs</h1>
            </div>
            <div className="cursor-pointer">
                <button className="btn btn-primary w-52" onClick={() => {router.push('/app')}}>Launch App</button>
            </div>
        </div>
    )
};

export default Navbar;