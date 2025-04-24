import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SiFirefoxbrowser, SiGooglechrome } from "react-icons/si";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='16' viewBox='0 0 140 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_4133_10133)'%3E%3Cpath d='M-0.0390625 44C16.7069 44 23.8369 34.61 32.6009 24.676C41.5709 14.516 51.4569 4 70.0009 4C88.5449 4 98.4309 14.516 107.401 24.676C116.165 34.61 123.295 44 140.041 44M-0.0390625 28.004C16.7069 28 23.8369 18.612 32.6009 8.678C41.5709 -1.484 51.4569 -12 70.0009 -12C88.5449 -12 98.4309 -1.484 107.401 8.678C116.165 18.612 123.295 28 140.041 28.006M140.001 12.008C123.255 12.006 116.165 2.612 107.401 -7.322C98.4309 -17.484 88.5449 -28 70.0009 -28C51.4569 -28 41.5709 -17.484 32.6009 -7.322C23.8369 2.612 16.7069 12 -0.0390625 12.004' stroke-opacity='0.1' stroke='%2318181B'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_4133_10133'%3E%3Crect width='140' height='16' fill='%23bfdbfe'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Browser Extension
            <span className="max-sm:hidden"> for Webcam Control</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none mb-6">
            Enhance Your <span className="text-primary">Webcam</span> Experience
          </h1>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl mb-8">
            Cam Tuner gives you complete control over your webcam settings.
            Adjust brightness, contrast, saturation and more with just a few
            clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="#download" id="download">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 rounded-full min-w-[180px] shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Chrome Webstore
                <SiGooglechrome />
              </Button>
            </Link>
            <Link
              href="https://github.com/tonmoydeb404/cam-tuner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full min-w-[180px]"
              >
                Firefox Addon
                <SiFirefoxbrowser />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
