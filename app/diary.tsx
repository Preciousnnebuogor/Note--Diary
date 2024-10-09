"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Diary() {
  const [getMessage, setGetMessage] = useState("");
  const [listOfNotes, setListOfNotes] = useState<string[]>([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editMessage, setEditMessage] = useState({
    id: 0,
    msg: "",
  });

  const storedList = JSON.parse(localStorage.getItem("noteList")!) as string[];
  // to get the item from the localstorage and use it to map through
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
            className={` mt-4 border-2 rounded w-[280px] md:w-[300px] md:h-[300px] bg-slate-500 flex items-center justify-center`}
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
                    setListOfNotes([...listOfNotes, getMessage]);
                    localStorage.setItem(
                      "noteList",
                      JSON.stringify(listOfNotes)
                    );
                    // noteList is the key for the localstorage

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

      <div className={`grid grid-col-1 md:grid-cols-3`}>
        {storedList.map((value, index) => (
          <div
            className={` bg-yellow-400 flex flex-col justify-between rounded w-[300px] h-[300px] mt-4 p-2 text-sm `}
          >
            {value}
            <div
              className={`flex items-center justify-center space-x-4 font-bold text-xl`}
            >
              <button className={` px-5`}>
                <MdEdit
                  onClick={() => {
                    setEditMessage({
                      id: index,
                      msg: value,
                    });
                    setShowEdit(true);
                  }}
                />
              </button>
              <button
                onClick={() => {
                  const itemDelete = listOfNotes.filter(
                    (value, number) => index !== number
                  );
                  setListOfNotes(itemDelete);
                  localStorage.setItem("noteList", JSON.stringify(itemDelete));
                  // noteList is the key for the localstorage
                }}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showEdit && (
        <div
          className={`flex items-center justify-center fixed w-full h-full bg-black/50 top-0 left-0`}
        >
          <div
            className={`bg-slate-200 mt-4 border-2 rounded w-[280px] md:w-[300px] md:h-[300px] flex items-center justify-center`}
          >
            <div>
              <p
                className={` font-bold mt-2 text-right flex items-center justify-center`}
              >
                Edit Note
              </p>
              <textarea
                className={` mt-4 md:w-[110%] p-2`}
                value={editMessage.msg}
                onChange={(e) => {
                  setEditMessage({
                    msg: e.target.value,
                    id: editMessage.id,
                  });
                }}
              />

              <div className={`space-x-4 text-sm m-4 text-right`}>
                <button
                  className={`bg-slate-200 p-2 rounded`}
                  onClick={() => {
                    const restData = listOfNotes.filter(
                      (value, index) => index !== editMessage.id
                    );
                    setListOfNotes([...restData, editMessage.msg]);
                    localStorage.setItem(
                      "noteList",
                      JSON.stringify(listOfNotes)
                    );
                    // noteList is the key for the localstorage

                    setShowEdit(false);
                  }}
                >
                  Done
                </button>
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
