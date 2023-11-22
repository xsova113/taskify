"use client";

import React from "react";
import { CardModal } from "../modals/card-modal";
import { ProModal } from "../modals/pro-modal";

export const ModalProvider = () => {
  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
