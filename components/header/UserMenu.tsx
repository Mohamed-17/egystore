import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { UserIcon } from "lucide-react";
import { signOutUser } from "@/lib/actions/auth-actions";
async function UserMenu() {
  const session = await auth();
  if (!session?.user)
    return (
      <Button asChild>
        <Link href={"/sign-in"}>
          <UserIcon /> Sign in
        </Link>
      </Button>
    );
  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant={"ghost"}
              className="flex items-center justify-center ml-2 gap-2 h-8 w-8 rounded-full bg-blue-500 cursor-pointer  "
            >
              {session.user.name?.charAt(0).toUpperCase() || "U"}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 space-y-4 ml-3 md:ml-0 mt-2"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal ">
            <div className="flex flex-col space-y-3">
              <div className="font-medium text-sm leading-none">
                {session?.user?.name}
              </div>
              <div className="text-muted-foreground leading-0 text-sm">
                {session?.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem className="p-0 mb-1">
            <form action={signOutUser} className="w-full">
              <Button
                variant={"default"}
                type="submit"
                className="w-full py-4 px-2  h-4 justify-start"
              >
                <UserIcon className="me-2" />
                Sign out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserMenu;
