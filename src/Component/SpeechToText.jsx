import React from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaMicrophoneAltSlash } from "react-icons/fa";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Your Browser doesn't support</span>;
  }

  return (
    <section className="w-full min-h-screen bg-gray-300 flex  justify-center  px-7">
      <div className="max-w-[700px] mx-auto  ">
        <div className="flex flex-col gap-5 text-center mt-[150px] w-full mb-3">
          <h1
            className="text-3xl  font-bold"
          >
            Speech to Text Converter
          </h1>
          <p className="sm:text-xl">
            A React hook theat converts speech from the microphone to text and
            makes it available to your React Components.
          </p>
          <p className="text-xl font-bold">Created By Shahrukh Saifi</p>
          <div className="w-full flex justify-center items-center text-2xl gap-2 font-bold">
            {listening ? (
              <CiMicrophoneOn
                className="cursor-pointer"
                onClick={SpeechRecognition.stopListening}
              />
            ) : (
              <FaMicrophoneAltSlash
                className="cursor-pointer"
                onClick={SpeechRecognition.startListening}
              />
            )}
            {listening ? "ON" : "OFF"}
          </div>
        </div>
        <div className="w-full text-center border-2 border-black px-3 py-3">
          <div className="data min-h-[140px] pb-6 font-semibold ">
            {transcript}
          </div>
          <div className="button pb-3 flex items-center justify-around flex-wrap">
            <button
              className="px-8 py-2  mb-3 bg-[#ff4141] font-semibold text-white rounded-lg  "
              onClick={resetTranscript}
            >
              Reset
            </button>
            <button
              className="px-8 py-2 mb-3 bg-[#ff4141] font-semibold text-white rounded-lg "
              onClick={SpeechRecognition.startListening}
            >
              Start
            </button>
            <button
              className="px-8 py-2 mb-3 bg-[#ff4141] font-semibold text-white rounded-lg "
              onClick={SpeechRecognition.stopListening}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechToText;
