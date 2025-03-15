// import { useEffect } from "react";
import { KeyboardEvent } from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../../models/shoppingItem';
import ShoppingItem from './ShoppingItem';
import { useState } from 'react';

export default function ShoppingList() {
  const [newItemName, setNewItemName] = useState('');
  const items = useLoaderData() as Item[];
  console.log('loader items ', items);

  const addItem = () => {
    items.push({
      id: Math.random().toString(),
      name: newItemName,
      category: 'Other',
      completed: false
    });
    setNewItemName('');
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addItem();
    }
  };

  return (
    <main>
      <h2>Shopping List</h2>
      {items.length > 0 ? (
        <>
          <p>Shopping time! You have {items.length} items on your list.</p>

          <input
            type="text"
            placeholder="Add Item"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyDown={(e) => onKeyPressHandler(e)}
          />
          <button type="button" onClick={addItem}>
            Add
          </button>

          <ul>
            {items.map((item) => (
              <ShoppingItem
                name={item.name}
                notes={item.notes}
                quantity={item.quantity}
                category={item.category}
                completed={item.completed}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>There's nothing on the list - add an item to get shopping!</p>
      )}
    </main>
  );
}
