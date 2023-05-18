"use client";
import { useEffect, useState } from "react";

interface Select {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
}
export default function SelectClient({ options, onChange }: Select) {
  const [selectedElement, setSelectedElement] = useState(options[0].label);
  const [active, setActive] = useState(false);
  useEffect(() => {
    onChange(selectedElement);
  }, [selectedElement]);
  return (
    <div
      className="select-container flex gap-2"
      onClick={() => {
        setActive(!active);
      }}>
      <ul className="Select z-30">
        <li className="">{selectedElement}</li>
        {options.map(({ value, label }) => (
          <li key={value} className={`${!active ? "hidden" : ""} bg-bg p-5`} onClick={() => setSelectedElement(value.toUpperCase())}>
            {label}
          </li>
        ))}
      </ul>
      <div className={`${active ? "hidden" : ""}`}>D</div>
    </div>
  );
}
