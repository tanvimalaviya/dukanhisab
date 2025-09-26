import Image from "next/image";
import React from "react";

const Security = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center justify-center text-center p-6 sm:p-10 space-y-4">
        {/* Heading + icon */}
        <div className="flex items-center justify-center flex-nowrap gap-2">
          <h1 className="font-bold text-graytext text-center text-[clamp(1.5rem, 5vw, 3.75rem)]">
            Invisible security. Unbreakable trust.
          </h1>

          <Image
            src="/lock-and-key.gif"
            alt="lock image"
            height={70}
            width={70}
            className="sm:h-[50px] sm:w-[50px]"
          />
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700">
          Your data stays private. Always encrypted.
        </p>
      </div>
    </div>
  );
};

export default Security;
