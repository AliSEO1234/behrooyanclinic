"use client";
import { useAppContext } from "@/contexts/app-context/app-context";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import PopForm from "./popForm";

const DialogForm = () => {
  const { popUpForm, setPopUpForm } = useAppContext();
  return (
    <Dialog open={popUpForm} onOpenChange={setPopUpForm}>
      <DialogContent
        onClick={() => setPopUpForm(false)}
        className="w-full min-w-full bg-[#00000052] border-none outline-none p-0 px-3 s1280:px-5 shadow-none h-full rounded-none"
      >
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div
          className="flex-cen w-full min-w-full "
        >
          <PopForm />
        </div>
        <DialogFooter className="hidden"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DialogForm;
