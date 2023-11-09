import React from "react";
interface PriorityOptionBox {
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
}

const PriorityOptionBox = ({ priority, setPriority }: PriorityOptionBox) => {
  const onChangePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
  };
  return (
    <div>
      <label htmlFor="priority">우선순위</label>
      <select value={priority} id="priority" onChange={onChangePriority}>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
    </div>
  );
};

export default PriorityOptionBox;
