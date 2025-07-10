import Image from "next/image";
import loader from "@/assets/loader.gif";
import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <Image src={loader} alt="loading" width={150} height={150} />
    </div>
  );
}
export default loading;
