import { websiteLinks } from "@/config/website";
import Link from "next/link";

type Props = {};

const DesktopMenu = (props: Props) => {
  return (
    <ul className="hidden sm:flex items-center gap-6">
      {websiteLinks.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            target={item.target}
            className="text-sm font-medium hover:text-primary"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
