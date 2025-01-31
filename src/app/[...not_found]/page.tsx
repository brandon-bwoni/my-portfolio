import Image from "next/image";
import Link from "next/link";
import image from "@/assets/not-found.gif";

const page = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <Image src={image} alt="Not found" className="w-full h-full" />
      <Link href="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};

export default page;
