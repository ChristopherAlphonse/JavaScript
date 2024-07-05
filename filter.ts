import React, { useState, useTransition } from "react";

function Filter({ items }) {
  const [filter, setFilter] = useState("");
  const [startTransition, isPending] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const filteredItems = items.filter((item) => item.name.includes(filter));

  const handleFilter = () => {
    startTransition(() => {
      setFilter(inputValue);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          startTransition(() => {
            setFilter(e.target.value);
          });
        }}
        placeholder="type to search"
      />
      <button onClick={handleFilter}>Filter</button>
      {isPending ? (
        <div> Loading ... </div>
      ) : (
        filteredItems.map((item) => <div key={item.name}> {item.name} </div>)
      )}
    </div>
  );
}

export default Filter;
