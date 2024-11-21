"use client";
import { useState } from "react";

const Aboutpage = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pt-32 max-w-2xl mx-auto flex flex-col justify-center items-center gap-8">
      <p>
        Hi! I{"'"}m <span className="font-bold text-xl"> Nishan</span>. I am a
        software developer and a tech entusiast.
      </p>
      {!showMore && (
        <button
          onClick={() => setShowMore(true)}
          className="z-10 px-4 py-3 border-black border rounded-xl hover:bg-gray-200 hover:bg-opacity-40"
        >
          Read More
        </button>
      )}

      {showMore && (
        <p>
          What else do you want to learn,{" "}
          <span className="font-bold text-3xl">यति ले पुगेन ?</span>
        </p>
      )}
    </div>
  );
};

export default Aboutpage;
