import { Dialog, DialogContent } from "@mui/material";
import React from "react";
import { GrClose } from "react-icons/gr";
import { ModalProps } from "src/utils/types";

export default function Modal(props: ModalProps) {
  const { isOpen, handleClose, icon, content } = props;
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="dialog-error"
      aria-describedby="dialog-error-description"
    >
      <button className="absolute top-2 right-2" onClick={handleClose}>
        <GrClose />
      </button>
      <DialogContent>
        <div className="flex flex-col items-center gap-4">
          {icon}
          <p className="text-center">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
