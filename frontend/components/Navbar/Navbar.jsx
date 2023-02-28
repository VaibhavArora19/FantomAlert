import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="flex justify-around pt-6">
            <div className="cursor-pointer" onClick={() => {return router.push("/")}}>
                <h1 className="text-3xl font-semibold mt-2">Fantom Alert</h1>
            </div>
            <div className="cursor-pointer mt-2">
                <a className="text-xl tracking-wider hover:border-b-2" href="https://github.com/VaibhavArora19/FantomAlert">Docs</a>
            </div>
            <div className="cursor-pointer">
                <button className="btn btn-primary w-52" onClick={() => {router.push('/app')}}>Launch App</button>
            </div>
        </div>
    )
};

export default Navbar;