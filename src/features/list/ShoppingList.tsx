import { KeyboardEvent } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Item, ItemDto } from '../../models/shoppingItem'
import ShoppingItem from './ShoppingItem'
import { Category, categories } from '../../models/category'
import { useState } from 'react'
import ListApi from '../../services/ListApi'

export default function ShoppingList() {
    const [items, setItems] = useState<Item[]>(
        (useLoaderData() as Item[]) || [],
    )
    const [name, setName] = useState('')
    const [notes, setNotes] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState<number | undefined>(undefined)

    const addItem = async () => {
        const dto: ItemDto = {
            name: name,
            notes: notes,
            quantity: quantity,
            category: category as Category,
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
        setNotes('')
        setName('')
        setCategory('')
        setQuantity(undefined)
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
            <div>
                <h2>Shopping List</h2>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        gap: '10px',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <input
                        type="text"
                        placeholder="Item Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => onKeyPressHandler(e)}
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((category: string) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        placeholder="Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        onKeyDown={(e) => onKeyPressHandler(e)}
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        min="1"
                        value={quantity ?? ''}
                        onChange={(e) =>
                            setQuantity(
                                e.target.value === ''
                                    ? undefined
                                    : e.target.valueAsNumber,
                            )
                        }
                    />
                    <button type="button" onClick={addItem}>
                        Add
                    </button>
                </div>
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
            </div>
        </main>
    )
}
