import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
    return (
        <div className='container z-50 flex items-center justify-between py-6 md:py-10 2xl:py-12'>
            <Link href={'/'}>
                <img className="size-11 md:size-[52px]" src="/Logo.png" alt="" />
            </Link>

            <Link href={'/auth/sign-in'}>
                <div className='flex items-center gap-1 text-xl cursor-pointer'>
                    <div className='bg-white rounded-full p-1.5 text-black'>
                        <MdArrowOutward className="text-xl" />
                    </div>
                    Customer Area
                </div>
            </Link>
        </div>
    );
};

export default Navbar;