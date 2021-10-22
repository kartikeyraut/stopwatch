function Timer({min,sec,centSec,playPause,reset}) {
    return (
        <div className="flex flex-row justify-center  items-center bg-white mx-auto rounded-full w-60 h-44 ">
          <div
            className={`flex flex-row justify-center ${
              !playPause && !reset ? "animate-pulse" : null
            }`}
          >
            <h1 className="text-6xl text-black ">
              {min}:{sec}:
            </h1>
            <h1 className="text-4xl text-black mt-5 ">{centSec=='100'?'99':centSec}</h1>
          </div>
        </div>
    )
}

export default Timer
