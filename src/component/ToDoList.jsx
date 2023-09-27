import React, { useState } from "react";
import "../App.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function ToDoList() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    if (inputList.trim() !== "") {
      setItems((oldItems) => {
        return [...oldItems, inputList];
      });
      setInputList("");
      setEditIndex(-1);
    }
  };

  const removeItem = (index) => {
    setItems((oldItems) => {
      return oldItems.filter((item, i) => i !== index);
    });
    if (editIndex === index) {
      setEditIndex(-1);
    }
  };

  const editItem = (index) => {
    setInputList(items[index]);
    setEditIndex(index);
  };

  const updateItem = () => {
    if (inputList.trim() !== "") {
      const updatedItems = [...items];
      updatedItems[editIndex] = inputList;
      setItems(updatedItems);
      setInputList("");
      setEditIndex(-1);
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-content">
        <h1>Things What I Do Daily</h1>
        <br />
        <div className="input-container">
          <input
            type="text"
            placeholder="Add an item"
            onChange={itemEvent}
            value={inputList}
          />
          {editIndex === -1 ? (
            <button className="add-button" onClick={listofItems}>
              Add
            </button>
          ) : (
            <button className="edit-button" onClick={updateItem}>
              Update
            </button>
          )}
        </div>
        {items.length === 0 ? (
          <p className="empty-message">Your to-do list is empty.</p>
        ) : (
          <table className="item-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>{editIndex === index ? (
                    <input
                      type="text"
                      value={inputList}
                      onChange={itemEvent}
                    />
                  ) : (
                    capitalizeFirstLetter(item)
                  )}</td>
                  <td>
                    {editIndex === index ? (
                      <button className="update-button" onClick={updateItem}>
                        Update
                      </button>
                    ) : (
                      <>
                        <button className="edit-button" onClick={() => editItem(index)}>
                          Edit
                        </button>
                        <button className="remove-button" onClick={() => removeItem(index)}>
                          Remove
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
