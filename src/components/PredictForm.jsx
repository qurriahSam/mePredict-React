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
import { addPrediction } from "../scores";

const PredictForm = () => {
  const [open, setOpen] = useState(false);
  const [prediction, setPrediction] = useState({
    home: "",
    away: "",
  });

  const handleOpen = () => setOpen(!open);

  const handlePrediction = (e) => {
    const key = e.target.name;
    const score = e.target.value;
    setPrediction({ ...prediction, [key]: score.toString() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { home, away } = prediction;

    if (home.length === 0 || away.length === 0) {
      alert("fill all fields");
    } else {
      addPrediction({ home: parseInt(home), away: parseInt(away) });
      console.log("done");
    }
  };

  return (
    <>
      <div className="grid mt-20">
        <Button ripple={true} className="bg-[#44ff00] px-14 place-self-center" onClick={handleOpen}>
          predict
        </Button>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Score:</DialogHeader>
        <DialogBody>
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <Input
              type="number"
              name="home"
              onChange={handlePrediction}
              value={prediction.home}
              className="min-w-[100px]"
            />
            <span>-</span>
            <Input
              color="light-green"
              type="number"
              name="away"
              onChange={handlePrediction}
              value={prediction.away}
              className=""
            />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button type="submit" variant="gradient" className="bg-[#44ff00]">
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default PredictForm;
