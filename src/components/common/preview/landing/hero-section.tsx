import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="relative flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-balance text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              We manage your IT, so you can manage your business.
            </h1>

            <p className="mt-6 text-2xl sm:text-xl leading-relaxed text-slate-600 ">
              Take charge of your business continuity with innovative IT
              solutions
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button>Schedule a Free Consultation</Button>

              <Button variant="outline">Services</Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-2xl">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
              <Image
                src="https://tse4.mm.bing.net/th/id/OIP.VYuo8K0rMUZO-o1mYjknyQHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Modern office workspace with professionals working"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 640px, 100vw"
                priority
              />
            </div>

            {/* subtle glow accent */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-blue-500/10 via-sky-400/10 to-cyan-300/10 blur-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
