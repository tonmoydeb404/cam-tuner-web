import { websiteDetails } from "@/config/website";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Button } from "../../ui/button";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 max-w-2xl w-full px-5">
      <section className="flex items-center w-full justify-between py-2 border rounded-full px-4 relative bg-card/10 backdrop-blur-md">
        <h2 className="font-bold">
          <Link href={"/"}>{websiteDetails.title}</Link>
        </h2>
        <DesktopMenu />
        <div className="flex items-center gap-2">
          <Button
            size={"icon"}
            variant={"outline"}
            className="rounded-full"
            asChild
          >
            <Link href={websiteDetails.github} target="_blank">
              <BsGithub />
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
