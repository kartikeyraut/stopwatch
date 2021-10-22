function FlagTimes({flagTimes}) {
    return (
        <div>
          {flagTimes.map((flagTime, index) => {
            return (
              <div
                key={index}
                className=" flex flex-row justify-center rounded-2xl   my-2"
              >
                <div className="flex flex-row justify-center text-md items-center w-6 h-6 bg-gray-700 text-white rounded-lg p-4">
                  {flagTimes.length - index}
                </div>
                <div className="ml-1 flex flex-row justify-center text-xl items-center px-10 w-36 h-6  bg-gray-700 text-white rounded-lg p-4">
                  {flagTime.min}:{flagTime.sec}:
                  <div className="text-lg pt-1">
                    {flagTime.centSec}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    )
}

export default FlagTimes
