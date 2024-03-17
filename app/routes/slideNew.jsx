// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

// import slide_image_1 from '../';
// import slide_image_2 from "../images/slide_img_2.jpg";
// import slide_image_3 from "../images/slide_img_3.jpg";
// import slide_image_4 from "../images/slide_img_4.jpg";
// import slide_image_5 from "../images/slide_img_5.jpg";
// import slide_image_6 from "../images/slide_img_6.jpg";
// import slide_image_7 from "../images/slide_img_7.jpg";

{
  /* <div className="bg-slate-900 h-full">
        <div className="flex justify-center pt-40 ">
          <Carousel className="w-full max-w-[90rem]">
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                <div className="p-1 border h-96">
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                      Announcing our next round of funding.{" "}
                      <Link to="#" className="font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <h1 className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl">
                      BlueNorth AI
                    </h1>
                    <p className="mt-6 text-base lg:text-lg  text-gray-300">
                      Enterprise AI suite to transform Supply Chain Planning and
                      Execution
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2">
                <div className="p-1 border h-96">
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                      Announcing our next round of funding.{" "}
                      <Link to="#" className="font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <h1 className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl">
                      BlueNorth AI
                    </h1>
                    <p className="mt-6 text-base lg:text-lg  text-gray-300">
                      Enterprise AI suite to transform Supply Chain Planning and
                      Execution
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 border">
                  <div className="relative isolate h-full w-full overflow-hidden bg-slate-900">
                    <div className="px-6 lg:px-8">
                      <div className="relative mx-auto max-w-2xl pt-28 sm:pt-32 lg:pt-50">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Announcing our next round of funding.{" "}
                            <Link to="#" className="font-semibold text-white">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                        <div className="relative z-10 text-center">
                          <h1 className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl">
                            BlueNorth AI
                          </h1>
                          <p className="mt-6 text-base lg:text-lg  text-gray-300">
                            Enterprise AI suite to transform Supply Chain
                            Planning and Execution
                          </p>
                          <div className="mt-8 flex justify-center gap-4 ">
                            <button
                              to="/"
                              type="button"
                              className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                            >
                              Get started
                            </button>
                            <button
                              type="button"
                              className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                            >
                              Request Demo
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 border">
                  <div className="relative isolate h-full w-full overflow-hidden bg-slate-900">
                    <div className="px-6 lg:px-8">
                      <div className="relative mx-auto max-w-2xl pt-28 sm:pt-32 lg:pt-50">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                            Announcing our next round of funding.{" "}
                            <Link to="#" className="font-semibold text-white">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              Read more <span aria-hidden="true">&rarr;</span>
                            </Link>
                          </div>
                        </div>
                        <div className="relative z-10 text-center">
                          <h1 className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl">
                            BlueNorth AI
                          </h1>
                          <p className="mt-6 text-base lg:text-lg  text-gray-300">
                            Enterprise AI suite to transform Supply Chain
                            Planning and Execution
                          </p>
                          <div className="mt-8 flex justify-center gap-4 ">
                            <button
                              to="/"
                              type="button"
                              className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                            >
                              Get started
                            </button>
                            <button
                              type="button"
                              className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                            >
                              Request Demo
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div> */
}
{
  /* <div className="relative isolate h-full w-full overflow-hidden bg-slate-900">
        <div className="px-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl pt-28 sm:pt-32 lg:pt-50">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Announcing our next round of funding.{" "}
                <Link to="#" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="relative z-10 text-center">
              <h1 className="bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-6xl font-bold text-transparent lg:text-8xl">
                BlueNorth AI
              </h1>
              <p className="mt-6 text-base lg:text-lg  text-gray-300">
                Enterprise AI suite to transform Supply Chain Planning and
                Execution
              </p>
              <div className="mt-8 flex justify-center gap-4 ">
                <button
                  to="/"
                  type="button"
                  className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                >
                  Get started
                </button>
                <button
                  type="button"
                  className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>

          <div>
            <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
          </div>
        </div>
      </div> */
}



// export default function slideNew() {
//   return (
//     <div className='container'>
//       hello
//     </div>
//   )
// }

