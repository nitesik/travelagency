import { siteConfig } from "@/utils/siteConfig";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center z-20 justify-between py-5 px-7 text-white fixed w-full top-0">
      <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-95 bg-gradient-to-b from-black blur-sm to-secondary"></div>
      <h1 className="text-3xl z-50">
        <Link href="/">BhutanUpwardTravels</Link>
      </h1>
      <ul className="flex gap-7 text-base font-semibold z-50 ">
        {siteConfig.getHeaderLinks().map((item, index) => (
          <li key={index} className="hover:text-primary ease-in transition-all">
            <Link href={item.href ?? ""}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
