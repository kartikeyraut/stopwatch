function Buttons({playPause,reset,onPlayPauseHandler,onFlagHandler,onResetHandler}) {
    return (
        <div className="flex flex-row flex-space justify-center items-center my-6">
          {playPause ? (
            <button
              className="bg-blue-900 rounded-full w-11 h-11 text-white p-0 mx-4"
              onClick={onFlagHandler}
            >
              <i class="fa fa-flag" aria-hidden="true"></i>
            </button>
          ) : !reset ? (
            <button
              className="bg-blue-900 rounded-full w-11 h-11 text-white p-0 mx-4"
              onClick={onResetHandler}
            >
              <i class="fa fa-stop" aria-hidden="true"></i>
            </button>
          ) : null}

          <button
            className="bg-blue-900 rounded-full w-11 h-11 text-white mx-4"
            onClick={onPlayPauseHandler}
          >
            {!playPause ? (
              <i class="fa fa-play" aria-hidden="true" />
            ) : (
              <i class="fa fa-pause" aria-hidden="true" />
            )}
          </button>
        </div>
    )
}

export default Buttons
