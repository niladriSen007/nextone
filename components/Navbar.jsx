"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname()
  return (
    <nav className="w-screen flex items-center justify-between py-4 px-24">
      <div>
        <Link href={"/"}>
        <Image
          src={"/logo.png"}
          className="w-12 h-12 object-cover"
          alt="burgir"
          width={1600}
          height={1600}
          />
          </Link>
      </div>
      <div className="list-none flex items-center gap-8 font-bold text-white">
        <li>
          <Link href={"/"} className={`${(!path?.startsWith("/community") && !path?.startsWith("/meals")) ? "text-orange-600" : "text-white"}`} >Home</Link>
        </li>
        <li>
          <Link href={"/community"} className={`${path?.startsWith("/community") ? "text-orange-600" : "text-white"}`}>Community</Link>
        </li>
        <li>
          <Link href={"/meals"} className={`${path?.startsWith("/meals") ? "text-orange-600" : "text-white"}`}>Meals</Link>
        </li>
      </div>
      <div className="flex items-center gap-8">
        <button className="px-4 py-1 rounded-md bg-gradient-to-r from-blue-400 font-black to-blue-600 border-2 border-blue-500 text-white">
          Login
        </button>
        <button className="px-4 py-1 rounded-md bg-transparent border-2 border-blue-500 text-white">
          Sign up
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
