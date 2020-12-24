/** @format */

import React from "react";

const Test = () => {
  const testArray = [
    {
      id: 1,
      todoName: "first todo",
      done: false,
      isEditing: false,
    },
    {
      id: 2,
      todoName: "second todo",
      done: false,
      isEditing: false,
    },
  ];

  const mapedTest = testArray.map((item) => {
    if (item.id === 2) {
      item.done = !item.done;
    }
    return item;
  });

  console.log(mapedTest);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Test;
