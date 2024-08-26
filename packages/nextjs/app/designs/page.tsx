"use client";

import React, { useState, useEffect } from "react";
import { createAccount } from "~~/mongodb/_actions/createAccountAction";
import { findAccountAction } from "~~/mongodb/_actions/findAccountAction";

const UserProfilePage = () => {
  const [wallet, setWallet] = useState("0x9d958fc91792293Fb0028CbaA27de58093aE0757"); // Replace with dynamic wallet fetching logic
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(null);

  console.log("wallet on initial render:", wallet);

  useEffect(() => {
    console.log("wallet inside useEffect before async call:", wallet);

    const checkFirstTimeUser = async () => {
      const account = await findAccountAction(wallet);
      if (!account) {
        await createAccount(wallet);
        setIsFirstTimeUser(true);
      } else {
        setIsFirstTimeUser(false);
      }
    };

    checkFirstTimeUser().then(() => {
      console.log("wallet inside useEffect after async call:", wallet);
    });
  }, [wallet]);

  return (
    <div>
      <h2>User Profile Page</h2>
      <p>{isFirstTimeUser !== null ? `First time user: ${isFirstTimeUser}` : "Checking..."}</p>
    </div>
  );
};

export default UserProfilePage;
