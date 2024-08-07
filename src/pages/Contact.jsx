import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="h-full  pt-[80px] ">
      <div className="py-4">
        <h1 className="text-center font-semibold text-3xl text-white">Contact <span className="text-slate-800">Me</span></h1>
      </div>
      <div className="mx-auto md:px-6 xl:px-20 ">
        <section className="pb-12">
          <div
            className="relative sm:h-[150px] lg:h-[250px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://i.pinimg.com/564x/0e/0e/b3/0e0eb3f5e03fd29d0b9b080a199c90ad.jpg')] rounded-md">
          </div>
          <div className="rounded-md px-6 md:px-12">
            <div
              className="block rounded-lg py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="mb-12 flex sm:flex-col lg:flex-row">
                <div className="mx-auto mb-12 text-center lg:mb-0 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mx-auto mb-4 h-8 w-8 text-primary dark:text-primary-400 text-white ">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                  <h6 className="font-medium text-white ">Unites States</h6>
                </div>
                <div className="mx-auto mb-12 text-center lg:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mx-auto mb-4 h-8 w-8 text-primary dark:text-primary-400 text-white ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <h6 className="font-medium text-white ">Pittsburgh, PA 15217</h6>
                </div>
                <div className="mx-auto mb-6 text-center md:mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mx-auto mb-4 h-8 w-8 text-primary dark:text-primary-400 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <h6 className="font-medium text-white">+1-412-586-5955</h6>
                </div>
              </div>
              <div className="mx-auto max-w-[700px]">
                <form className='px-4'>
                  <div className="relative mb-6 " data-te-input-wrapper-init>
                    <input type="text"
                      className="peer block min-h-[auto] w-full rounded border-b-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-slate-800 dark:placeholder:text-slate-800 dark:peer-focus:text-primary text-white [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 caret-white dark:caret-slate-800"
                      id="name" placeholder="Name" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] dark:text-slate-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-white dark:peer-focus:text-primary caret-orange-600">Name
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input type="email"
                      className="peer block min-h-[auto] w-full rounded border-b-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-slate-800 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary text-white [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 caret-white dark:caret-orange-600"
                      id="exampleInput91" placeholder="Email address" />
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none text-white dark:peer-focus:text-primary dark:text-slate-800">Email address
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      className="peer block min-h-[auto] w-full rounded border-b-2 border-white bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 dark:text-slate-800"
                      id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                    <label
                      className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-orange-50 dark:peer-focus:text-primary">Message</label>
                  </div>
                  <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  </div>
                  <motion.button type="button"
                    className="inline-block w-full rounded-3xl bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white lg:mb-0 bg-gradient-to-br from-orange-400 from:30% from:70% to-pink-400 overflow-x-none shadow-sm"
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.p
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    >
                      Send
                    </motion.p>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;