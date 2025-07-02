"use client";

import Paragraph from "./typography/Paragraph";
import Image from "next/image";
import { useState } from "react";

export default function QuestionCardDropDown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex gap-4 hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <Image
            src="/images/gg_add.png"
            width={24}
            height={36}
            alt="add icon"
          />
        </div>
        <div>
          <h3 className="text-primary text-left text-[1.5rem] mb-2 font-semibold">
            {question}
          </h3>
        </div>
      </button>

      <div
        className={`overflow-clip ease-in-out duration-[400ms] ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Paragraph className="pl-10">{answer}</Paragraph>
      </div>
    </div>
  );
}
