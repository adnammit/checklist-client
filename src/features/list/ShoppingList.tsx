// import { useEffect } from "react";
import { KeyboardEvent } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Item, ItemDto } from '../../models/shoppingItem'
import ShoppingItem from './ShoppingItem'
import { useState } from 'react'
import ListApi from '../../services/ListApi'

export default function ShoppingList() {
    const [items, setItems] = useState<Item[]>(
        (useLoaderData() as Item[]) || [],
    )
    const [newItemName, setNewItemName] = useState('')

    const addItem = async () => {
        const dto: ItemDto = {
            // id: Math.random(),
            name: newItemName,
            category: 'Other',
            completed: false,
            listId: 1,
        }

        let newItem: Item
        try {
            newItem = await ListApi.createListItem(dto)
        } catch (error) {
            console.error('error creating list item', error)
            // TODO set error state
            return
        } finally {
            // set loading = false
        }

        setItems((prevItems) => [...prevItems, newItem])
        setNewItemName('')
    }

    const updateItem = async (item: Item) => {
        console.log('updating item', item, item.completed)
        try {
            await ListApi.updateListItem(item)
        } catch (error) {
            console.error('error creating list item', error)
            // TODO set error state
            return
        } finally {
            // set loading = false
        }
        // TODO do this or refetch all?
        setItems((prevItems) =>
            prevItems.map((i) => (i.id === item.id ? item : i)),
        )
    }

    const deleteItem = async (id: number) => {
        try {
            await ListApi.deleteListItem(id)
        } catch (error) {
            console.error('error creating list item', error)
            // TODO set error state
            return
        } finally {
            // set loading = false
        }
        // TODO: make call to delete
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addItem()
        }
    }

    return (
        <main>
            <h2>Shopping List</h2>
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
            {items.length > 0 ? (
                <>
                    <p>
                        Shopping time! You have {items.length} items on your
                        list.
                    </p>

                    <ul>
                        {items.map((item) => (
                            <ShoppingItem
                                key={item.id}
                                item={item}
                                onUpdate={updateItem}
                                onDelete={deleteItem}
                            />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    There&apos;s nothing on the list - add an item to get
                    shopping!
                </p>
            )}
        </main>
    )
}
