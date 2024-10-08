"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function Diary() {
  const [getMessage, setGetMessage] = useState("");
  const [addResult, setaddResult] = useState<string[]>([]);
  const [show, setShow] = useState(false); // use to use the textarea input
  const [showEdit, setShowEdit] = useState(false);
  const [secondGetMessage, setSecondGetMessage] = useState("");

  return (
    <div className={`mt-4 px-4`}>
      <div
        className={` bg-slate-200 rounded w-[200px] h-[200px] flex items-center justify-center`}
      >
        <FaPlus
          className={` text-white mb-20 mt-16 text-4xl`}
          onClick={() => {
            if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
        />
      </div>

      {show && (
        <div
          className={`flex items-center justify-center fixed w-full h-full bg-black/50 top-0 left-0`}
        >
          <div
            className={` mt-4 border-2 rounded w-[280px] md:w-[300px] md:h-[300px] bg-red-200 flex items-center justify-center`}
          >
            <div>
              <p
                className={` font-bold mt-2 text-right flex items-center justify-center`}
              >
                New Note
              </p>
              <textarea
                className={` mt-4 md:w-[110%] p-2`}
                value={getMessage}
                onChange={(e) => {
                  setGetMessage(e.target.value);
                }}
              />

              <div className={`space-x-4 text-sm m-4 text-right`}>
                <button
                  className={`bg-slate-200 p-2 rounded`}
                  onClick={() => {
                    setaddResult([...addResult, getMessage]);
                    setGetMessage("");
                  }}
                >
                  Create Note
                </button>
                <button
                  className={`bg-slate-200 p-2 rounded`}
                  onClick={() => {
                    setShow(false);
                    setGetMessage("");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {addResult.map((value, index) => (
        <div className={`flex justify-between items-start bg-orange-600`}>
        <div
          className={` bg-green-200 flex flex-col justify-between rounded w-[300px] h-[300px] mt-4 p-2 text-sm `}
        >
          {value}
          <div
            className={`flex items-center justify-center space-x-4 font-bold text-xl`}
          >
            <button className={` px-5`}>
              <MdEdit
                onClick={() => {
                  setSecondGetMessage(value);
                  setShowEdit(true);
                }}
              />
            </button>
            <button>
              <MdDelete />
            </button>
          </div>
          </div>
        </div>
      ))}

      {showEdit && (
        <div
          className={`flex items-center justify-center fixed w-full h-full bg-black/50 top-0 left-0`}
        >
          <div
            className={`bg-slate-300 mt-4 border-2 rounded w-[280px] md:w-[300px] md:h-[300px] flex items-center justify-center`}
          >
            <div>
              <p
                className={` font-bold mt-2 text-right flex items-center justify-center`}
              >
                Edit Note
              </p>
              <textarea
                className={` mt-4 md:w-[110%] p-2`}
                value={secondGetMessage}
                onChange={(e) => {
                  setSecondGetMessage(e.target.value);
                }}
              />

              <div className={`space-x-4 text-sm m-4 text-right`}>
                <button className={`bg-slate-200 p-2 rounded`}>Done</button>
                <button
                  className={`bg-slate-200 p-2 rounded`}
                  onClick={() => {
                    setShowEdit(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
