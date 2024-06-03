import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='container flex items-center justify-between py-12'>
            <Link href={'/'}>
                <img className="size-[52px]" src="/Logo.png" alt="" />
            </Link>

            <Link href={'/auth/sign-up'}>
                <div className='flex items-center gap-1 text-xl cursor-pointer'>
                    <div className='bg-white rounded-full p-1.5 text-black'>
                        <MdArrowOutward className="text-xl" />
                    </div>
                    Espace client
                </div>
            </Link>
        </div>
    );
};

export default Navbar;