import { APP_NAME } from "@/lib/constans";
import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME} All rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
