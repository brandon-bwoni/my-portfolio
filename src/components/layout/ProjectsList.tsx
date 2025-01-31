// "use client";
// import { motion } from "framer-motion";
// import Link from "next/link";

// import { FaArrowRight } from "react-icons/fa";

// import Card from "@/components/UI/ProjectCard";
// import { projects } from "@/assets/provider";

// const arrowVariants = {
//   hidden: { x: 0 },
//   visible: {
//     x: [0, 5, -5, 5, 0],
//     transition: {
//       delay: 1,
//       duration: 1,
//       repeat: Infinity,
//     },
//   },
// };

// const ProjectsList = () => {
//   return (
//     <div className="h-full px-8 xl:px-16 pb-12">
//       <div className="flex justify-center pt-2">
//         <span className="font-semibold dark:text-darkText text-lightBtn  text-2xl mb-6">
//           My{" "}
//           <b className="text-lightText dark:text-orange-500 font-semibold">
//             {" "}
//             Projects
//           </b>
//         </span>
//       </div>
//       <div className="h-full flex flex-wrap gap-6 justify-center items-center place-items-center">
//         {projects.slice(0, 4).map((project) => {
//           return (
//             <Card
//               key={project.id}
//               name={project.name}
//               image={project.image}
//               description={project.description}
//               github={project.github}
//               demo={project.demo}
//             />
//           );
//         })}
//       </div>
//       <div className="flex pt-8 sm:justify-center xl:mr-5 ">
//         <Link href="projects">
//           <button className="h-10 flex px-[16px] rounded-3xl dark:text-darkText items-center gap-3 font-normal mb-2 border-2 border-lightBtn hover:bg-lightBtn/20 hover:border-none  dark:border-orange-500 text-lightText dark:hover:bg-orange-500/20 hover:font-bold dark:hover:shadow-lightBg/10 hover:shadow-darkBg/30">
//             View All Projects
//             <motion.span
//               variants={arrowVariants}
//               initial="hidden"
//               animate="visible"
//             >
//               <FaArrowRight className="w-6 h-6" />
//             </motion.span>
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProjectsList;
