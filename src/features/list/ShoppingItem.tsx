import { Item } from '../../models/shoppingItem'

interface Props {
    item: Item
    onUpdate: (item: Item) => void
    onDelete: (id: number) => void
}

export default function ShoppingItem({ item, onUpdate, onDelete }: Props) {
    const getCompletedIcon = () => {
        return item.completed ? '✅' : '❌'
    }

    const toggleCompleted = () => {
        const updatedItem = {
            ...item,
            completed: !item.completed,
        }
        onUpdate(updatedItem)
    }

    const deleteItem = () => {
        onDelete(item.id)
    }

    return (
        <li style={{ listStyleType: 'none' }}>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    gap: '10px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <span>{item.notes}</span>
                <span>{item.quantity}</span>
                <br />
                <div style={{ gap: '10px', display: 'flex' }}>
                    <button onClick={toggleCompleted}>
                        {getCompletedIcon()}
                    </button>
                    <button onClick={deleteItem}>🗑️</button>
                </div>
            </div>
        </li>
    )
}
