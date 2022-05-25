import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
} from "@material-tailwind/react";

const PredictForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="grid mt-20">
        <Button ripple={true} className="bg-[#44ff00] px-14 place-self-center" onClick={handleOpen}>
          predict
        </Button>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Score:</DialogHeader>
        <DialogBody divider>
          <Input />
          <Input />
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" className="bg-[#44ff00]" onClick={handleOpen}>
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default PredictForm;
