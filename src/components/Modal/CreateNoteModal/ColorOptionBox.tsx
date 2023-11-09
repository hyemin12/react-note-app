import React from "react";

interface ColorOptionBoxProps {
  $noteColor: string;
  setNoteColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorOptionBox = ({ $noteColor, setNoteColor }: ColorOptionBoxProps) => {
  const onChangeColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNoteColor(e.target.value);
  };
  return (
    <div>
      <label htmlFor="color">배경색</label>
      <select value={$noteColor} id="color" onChange={onChangeColor}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">pink</option>
        <option value="orange">orange</option>
        <option value="violet">violet</option>
      </select>
    </div>
  );
};

export default ColorOptionBox;
