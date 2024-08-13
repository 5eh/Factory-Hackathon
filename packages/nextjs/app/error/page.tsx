"use client";

import Link from "next/link";

const Page = () => {
  console.log("error");

  return (
    <div className=" w-full justify-center  text-center">
      <p className="text-center font-semibold">There was an error displaying this page or listing </p>
      <p className="code text-primary">Error: {404} </p>
      <div className="flex gap-4 justify-center">
        <Link href={"/"}>
          <button className="transition hover:ease-in-out hover:bg-primary/80 hover:border-black border-primary bg-primary/30 dark:hover:bg-primary/70 dark:border-primary border dark:text-white px-4 py-2 code">
            HOME PAGE
          </button>
        </Link>
        <Link href={"/explore"}>
          <button className="transition hover:ease-in-out hover:bg-primary/80 hover:border-black border-primary bg-primary/30 dark:hover:bg-primary/70 dark:border-primary border dark:text-white px-4 py-2 code">
            ALL LISTINGS
          </button>
        </Link>

        <button className="transition hover:ease-in-out hover:bg-red-400/80 hover:border-red-500 bg-red-400/30 border-red-400 dark:hover:bg-red-400/70 dark:border-red-400 border dark:text-white dark:hover:text-black px-4 py-2 code">
          CLOSE THIS PAGE
        </button>
        <Link href={"/contact"}>
          <button className="transition hover:ease-in-out hover:bg-gray-200/80 dark:hover:bg-white border-black dark:border-white border text-black dark:text-white dark:hover:text-black px-4 py-2 code">
            CONTACT SUPPORT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
