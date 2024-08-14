"use client";

import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import Sorting from "./sorting";

const Page = () => {
  const { data: allListings } = useScaffoldReadContract({
    contractName: "ServiceContracts",
    functionName: "getAllListings",
  });
  console.log("Full Contract Metadata:", JSON.stringify(allListings, null, 2));

  return (
    <div>
      <Sorting />
    </div>
  );
};

export default Page;
