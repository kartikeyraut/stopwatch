import { useEffect, useState } from "react";
import Buttons from "./Buttons/Buttons";
import FlagTimes from "./FlagTimes/FlagTimes";
import Timer from "./Timer/Timer";

function Stopwatch() {
  const [centSec, setCentSec] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  const [playPause, setPlayPause] = useState(false);
  const [reset, setReset] = useState(true);
  const [flagTimes, setFlagTimes] = useState([]);
  const [stopwatch, setStopwatch] = useState(null);

  useEffect(() => {
    clearInterval(stopwatch);
    if (playPause) {
      reset && setReset(false);
      setStopwatch(
        setInterval(() => {
          setCentSec((prev) => {
            return prev + 1;
          });
        }, 10)
      );
    } else {
      clearInterval(stopwatch);
    }
  }, [playPause]);

  useEffect(() => {
    if (centSec === 100) {
      setCentSec(0);
      setSec((prev) => {
        return prev + 1;
      });
    }
    if (sec === 60) {
      setSec(0);
      setMin((prev) => {
        return prev + 1;
      });
    }
    if (min === 60) {
      onResetHandler();
      alert("Bro That's Enough ! That's Enough");
    }
  }, [centSec, sec]);

  const onPlayPauseHandler = () => {
    setPlayPause((prev) => {
      return !prev;
    });
  };

  const onFlagHandler = () => {
    setFlagTimes((prev) => {
      const newTimes = [...prev];
      newTimes.unshift({
        centSec:formatTime(centSec),
        sec:formatTime(sec),
        min:formatTime(min),
      });

      return newTimes;
    });
  };

  const onResetHandler = () => {
    clearInterval(stopwatch);
    setReset(true);
    setPlayPause(false);
    setCentSec(0);
    setSec(0);
    setMin(0);
    setFlagTimes([]);
  };

  const formatTime = (val) => {
    if (val < 10) {
      return "0" + val;
    } else {
      return val;
    }
  };
  return (
    <div className="min-h-screen min-w-screen bg-gray-800">
      <div className="flex flex-col pt-10 ">
        <Timer
        min={formatTime(min)}
        sec={formatTime(sec)}
        centSec={formatTime(centSec)}
        playPause={playPause}
        reset={reset}
        />
        <Buttons
        playPause={playPause}
        reset={reset}
        onPlayPauseHandler={onPlayPauseHandler}
        onFlagHandler={onFlagHandler}
        onResetHandler={onResetHandler}
        />
        
        <FlagTimes
        flagTimes={flagTimes}
        />
        
      </div>
    </div>
  );
}

export default Stopwatch;