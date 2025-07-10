"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenuSubContent,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";

export default function ToggleMenu() {
  const [mount, setMout] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMout(true);
  }, []);

  if (!mount) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "light" ? (
            <Sun />
          ) : (
            <Moon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuLabel>Apperance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme === "system" && true}
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "dark" && true}
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme === "light" && true}
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
