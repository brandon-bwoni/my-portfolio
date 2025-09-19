import Image from "next/image";
import Link from "next/link";
import { assets } from "@/constants/provider";

const page = () => {
  return (
    <div className="h-full pt-16 bg-slate-900">
      <Image 
        src={assets.notFound} 
        alt="Not found" 
        width={800}
        height={600}
        className="w-full h-[90vh]" 
      />
      <Link href="/" className="my-4 flex justify-center">
        <button className="rounded-xl px-3 py-2 hover:cursor-pointer hover:border-none dark:hover:bg-blue-900 dark:text-darkText text-lightText  hover:bg-lightBtn/30">
          Go back home
        </button>
      </Link>
    </div>
  );
};

export default page;
