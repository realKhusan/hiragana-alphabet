import { hiragana } from "@/constant/hiragana";
import React from "react";

function Alphabet() {
  return (
    <div className="container flex justify-center mx-auto my-10">
      <div className="flex gap-2 h-auto">
        {hiragana.map((column, index) => (
          <div key={index} className="select-none">
            {column.map(
              (item, itemIndex) =>
                item !== null && (
                  <div
                    key={`${index}-${itemIndex}`}
                    className="border mb-2 hover:cursor-pointer "
                  >
                    <h1 className="text-9xl p-2">{item.text}</h1>
                    <p className="px-2  py-1 border-t text-center">{item.id}</p>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alphabet;
