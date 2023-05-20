"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Select {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  defaultValue: string;
}
export default function SelectClient({ options, onChange, defaultValue }: Select) {
  const [selectedElement, setSelectedElement] = useState(defaultValue);
  const [active, setActive] = useState(false);

  return (
    <div
      className="select-container flex gap-2 text-sm"
      onClick={() => {
        setActive(!active);
      }}>
      <ul className="Select z-30 text-sm  ">
        <li className="h-full flex items-center">{selectedElement}</li>
        {options.map(({ value, label }) => (
          <li key={value} className={`${!active ? "hidden" : ""} bg-bg p-5`} onClick={() => setSelectedElement(value.toUpperCase())}>
            <Link href={`catalog?category=${value}`}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className={`${active ? "hidden" : ""} flex items-center`} >D</div>
    </div>
  );
}
