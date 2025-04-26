import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { websiteDetails, websiteLinks } from "@/config/website";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";

type Props = {};

const MobileMenu = (props: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className="sm:hidden rounded-full"
        >
          <LuMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{websiteDetails.title}</SheetTitle>
          <SheetDescription>{websiteDetails.description}</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-y-3 px-5">
          {websiteLinks.map((item, index) => (
            <SheetClose key={item.href} asChild>
              <Button variant={"outline"} className="justify-start" asChild>
                <Link href={item.href} target={item.target}>
                  {item.title}
                </Link>
              </Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
