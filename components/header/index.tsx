import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart, UserIcon } from "lucide-react";

import Image from "next/image";
import { APP_NAME } from "@/lib/constans";
import ToggleMenu from "./ToggleMenu";
import Menu from "./Menu";
export default function Header() {
  return (
    <header>
      <div className="wrapper flex-between">
        <Link href={"/"} className="flex-start space-x-2">
          <Image
            src={"/images/logo.svg"}
            height={48}
            width={48}
            alt={`${APP_NAME} logo`}
            priority={true}
          />{" "}
          <span className=" hidden lg:block ml-2 font-bold text-2xl">
            {APP_NAME}
          </span>
        </Link>

        <Menu />
      </div>
    </header>
  );
}
