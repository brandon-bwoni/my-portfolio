"use client";
import {ContactForm} from "../../components/UI/ContactForm";
import {Socials} from "../../components/UI/Socials";
import { StaggerContainer, StaggerItem } from "../../animations/StaggerContainer";
import { motion } from "framer-motion";
import { fadeInUp, gentleHover } from "../../animations/variants";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="mx-auto mb-2 h-8 w-8 text-primary dark:text-primary-400 text-lightBtn dark:text-orange-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
          />
        </svg>
      ),
      title: "Zimbabwe"
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="mx-auto mb-2 h-8 w-8 dark:text-orange-500 text-lightBtn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Harare"
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="mx-auto mb-2 h-8 w-8 text-primary dark:text-primary-400 dark:text-orange-500 text-lightBtn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      title: "+263-784999299"
    }
  ];

  return (
    <div className="px-6 pt-16">
      <motion.div 
        className="py-4 pt-20"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        {/* <h1 className="text-center font-semibold  dark:text-darkText mb-16 text-lightBtn">
          Contact{" "}
          <span className="dark:text-orange-500 text-lightText">Me</span>
        </h1> */}
      </motion.div>
      
      <div className="mx-auto md:px-6 xl:px-20">
        <section className="pb-12">
          <motion.div 
            className="rounded-md px-2 md:px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="block rounded-lg lg:py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              {/* Contact Info Section */}
              <div className="mb-16 px-4">
                <motion.h2 
                  className="text-center text-2xl md:text-3xl font-semibold mb-12 dark:text-darkText text-lightText"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Get In <span className="dark:text-orange-500 text-lightBtn text-3xl lg:text-3xl">Touch</span>
                </motion.h2>
                
                <StaggerContainer 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
                  delay={0.4}
                >
                  {contactInfo.map((info) => (
                    <StaggerItem key={info.id}>
                      <motion.div 
                        className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-700/40 transition-all duration-300"
                        variants={gentleHover}
                        whileHover="hover"
                      >
                        <div className="mb-4">
                          {info.icon}
                        </div>
                        <h6 className="font-medium text-center dark:text-darkText text-lightText text-sm md:text-base">
                          {info.title}
                        </h6>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
              
              {/* Contact Form Section */}
              <motion.div 
                className="mx-auto w-full max-w-4xl px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-white/5 dark:bg-gray-800/20 rounded-lg p-6 md:p-8 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30">
                  <ContactForm />
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="flex flex-col text-lightText dark:text-darkText text justify-center items-center gap-4 text-center mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h1 className="font-bold text-2xl">Social Networks</h1>
              <Socials />
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
