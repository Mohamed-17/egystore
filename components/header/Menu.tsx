import React from "react";
import ToggleMenu from "./ToggleMenu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ShoppingCart, UserIcon } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import UserMenu from "./UserMenu";

function Menu() {
  return (
    <>
      <div className="hidden justify-center items-center gap-4 md:flex">
        <ToggleMenu />
        <Button asChild variant="ghost">
          <Link href={"/cart"}>
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <UserMenu />
      </div>
      <nav className="md:hidden ">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start ps-2 ">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ToggleMenu />
            <Button asChild variant="ghost">
              <Link href={"/cart"}>
                <ShoppingCart /> Cart
              </Link>
            </Button>
            <UserMenu />
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default Menu;
