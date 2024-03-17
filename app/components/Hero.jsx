import { Button } from "~/components/Button";
import { HeroBackground } from "~/components/HeroBackground";
import blurCyanImage from "../../public/assets/blur-cyan.png";
import blurIndigoImage from "../../public/assets/blur-indigo.png";
import CardsLayout from "../components/Cards";


export function Hero() {
  return (
    <div className="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.75rem] dark:pb-32 dark:pt-[4.75rem]">
      <div className="mb-16 py-16 sm:px-2 lg:relative lg:px-0 lg:py-28">
        <div className="mx-auto grid max-w-2xl items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 text-center">
            <img
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
            />
            <div className="relative mt-4">
              <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-7xl font-bold tracking-tight text-transparent">
                BlueNorth AI
              </p>
              <p className="mt-3 text-4xl tracking-tight text-white">
                Enterprise AI suite to transform Supply Chain Planning and
                Execution
              </p>
              <div className="mt-8 flex justify-center gap-4 ">
                <Button href="/home">Get started</Button>
                <Button href="/" variant="secondary">
                  Our Capabilities
                </Button>
              </div>
            </div>
          </div>

          <div className="relative lg:static xl:pl-10">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32 [mask-image:linear-gradient(transparent,white,white)] lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0 lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <img
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
              />
              <img
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
              />
            </div>
          </div>
        </div>
        <CardsLayout />
      </div>
    </div>
  );
}
