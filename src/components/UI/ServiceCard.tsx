// "use client";
// import { motion } from "framer-motion";

// type ServiceCardProps = {
//   id: number;
//   service: string;
//   description: string;
//   icon: React.ComponentType;
// };

// const ServiceCard = ({
//   id,
//   service,
//   description,
//   icon: Icon,
// }: ServiceCardProps) => {
//   return (
//     <div className="flex flex-col justify-center items-center gap-3 w-56 h-56 dark:bg-orange-500 rounded-xl text-center hover:cursor-pointer hover:transition-all hover:shadow-2xl hover:shadow-darkBg dark:hover:shadow-orange-200 ">
//       <div className="dark:bg-darkBg p-1 rounded-full">
//         <div className="dark:bg-darkText p-2 rounded-full">
//           <Icon />
//         </div>
//       </div>
//       <div className="flex flex-col gap-2 text-darkBg px-2">
//         <h1 className="font-bold text-lg leading-5 text-wrap">{service}</h1>
//         <p className="text-sm font-medium leading-4">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;
