import React from "react";

function Introduction() {
  return (
    <div className="flex flex-col h-full space-y-4 p-4 overflow-auto">
      <div>
        <h2 className="text-gray-100 flex justify-center items-center font-bold text-2xl">SmartCookAi</h2>
      </div>
      <div className="mt-auto">
        <div className="flex justify-center items-center">
          <p className="text-gray-200 text-sm">
            Made with <span className="text-red-500">&hearts;</span> by Feta Sakiri
             (@0xfeta)
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
