
// import React, { useState } from 'react';

// function TodoList() {
//   const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

//   const handleAddItem = () => {
//     setItems([...items, 'New Item']);
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => {
//           return <li key={index}>{item}</li>;
//         })}
//       </ul>
//       <button onClick={handleAddItem}>Add Item</button>
//     </div>
//   );
// }

// export default TodoList;


// import React, { useState } from 'react'

// function Todolist() {
//     const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
   
//     const handleAddItem = () => {
//        if (newItem !== ''){
//         setItems([...items, 'New Item']);
//        }
//        setItems('')
//       };
//       const handleInputChange = (event) =>{
//         setItems (event.target.value)
//       }
      
//       const handleDeleteItem = (index) => {
//         setItems(items.filter((item, i) => i !== index));
//       };
//   return (
//     <div className='container'>
//      <ul>
//      {items.map((item, index)=>{
//            return <li key={index}>{item}
//           <button onClick={() => handleDeleteItem(index)}>Delete</button>
//            </li>
           
//         })}
//      </ul>
//      <input type='text' value={newItem} onChange={handleInputChange } placeholder='Enter new item'/>
// <button onClick={handleAddItem}>add item</button>
//     </div>
//   )
// }

// export default Todolist
import React, { useState } from 'react';

function Todolist() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1', completed: false },
    { id: 2, text: 'Item 2', completed: false },
    { id: 3, text: 'Item 3', completed: false },
  ]);

  const [newItem, setNewItem] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = () => {
    if (newItem !== '') {
      const newItemObject = { id: items.length + 1, text: newItem, completed: false };
      setItems([...items, newItemObject]);
      setNewItem('');
    }
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEditItem = (id) => {
    setEditingItem(id);
  };

  const handleUpdateItem = (event) => {
    const updatedItem = event.target.value;
    setItems(
      items.map((item) => {
        if (item.id === editingItem) {
          return { ...item, text: updatedItem };
        }
        return item;
      })
    );
    setEditingItem(null);
  };

  return (
    <div className='container'>
      <ul>
        {items.map((item) => {
          return (
            <li  style={{ listStyle: 'none', padding: '3px'}} key={item.id}>
              {item.completed ? (
                <s>{item.text}</s>
              ) : (
                <span>  {item.text}</span>
              )}
               <button style={{paddingLeft:'6px'}} onClick={() => handleToggleCompleted(item.id)}>
                {item.completed ? 'Uncomplete' : 'Complete'}
              </button>
              {editingItem === item.id ? (
                <input
                  type='text'
                  value={item.text}
                  onChange={handleUpdateItem}
                  onBlur={() => setEditingItem(null)}
                />
              ) : (
                <button onClick={() => handleEditItem(item.id)}>Edit</button>
              )}
              <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <input
        type='text'
        value={newItem}
        onChange={handleInputChange}
        placeholder='Enter new item'
      />
      <button onClick={handleAddItem}>Add item</button>
    </div>
  );
}

export default Todolist;
