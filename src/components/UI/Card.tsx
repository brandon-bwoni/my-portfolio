// 'use client';
// import { motion } from 'framer-motion';
// import Image, { StaticImageData } from 'next/image';
// import Link from 'next/link';

// import { FaGithub } from 'react-icons/fa';
// import { MdScreenshotMonitor } from "react-icons/md";

// type CardProps = {
//   name: string
//   image?: StaticImageData
//   description: string
//   github: string
//   demo: string
// }

// const Card = ({
//   name,
//   image,
//   description,
//   github,
//   demo,
// }: CardProps) => {
//   return (
//     <div
//       className='h-[350px] w-[270px] rounded-lg dark:bg-orange-500'
//     >
//       {image && (
//         <Image
//         src={image}
//         alt={name}
//         className='h-[180px] w-full object-cover rounded-t-lg'
//         layout='responsive'
//         />
//         )}
//       <div className='text-center px-2 pt-1'>
//         <h1 className='dark:text-white font-semibold text-2xl pb-1'>{name}</h1>
//         <p className='text-sm font-medium dark:text-darkText pb-1'>{description}</p>
//       </div>
//       <div className='flex flex-row justify-center gap-4 pt-2'>
//         <Link href={github}>
//           <motion.button
//             className="flex justify-center items-center w-[100px] h-10 border-2  sm:text-nowrap dark:border-darkText font-medium rounded-3xl text-sm dark:hover:bg-darkText dark:hover:text-darkBg hover:font-bold hover:border-0 dark:text-darkText gap-2"
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.5 }
//             }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <FaGithub className='h-5 w-5 ' />
//             <span>Github</span>
//           </motion.button>
//         </Link>
//         <Link href={demo}>
//           <motion.button
//             className="w-[100px] h-10 sm:text-nowrap font-medium rounded-3xl text-sm light:bg-slate-950 hover:font-bold dark:text-darkText dark:bg-darkBg dark:hover:bg-blue-950 dark:hover:text-white hover:bg-slate-500 "
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.5 }
//             }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <div className='flex justify-center gap-2'>
//               <MdScreenshotMonitor className='h-5 w-5 ' />
//               <p>Demo</p>
//             </div>
//           </motion.button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;
