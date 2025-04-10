import { Category } from './category'

export interface Item extends ItemDto {
    id: number
    // name: string
    // notes?: string
    // quantity?: number
    // // TODO: make category a computed property of customCategory || systemCategory
    // // is uncategorized == 'Other' or undefined?
    // category: Category
    // // customCategory?: string
    // completed: boolean
    // listId: number
}

export interface ItemDto {
    name: string
    notes?: string
    quantity?: number
    // TODO: make category a computed property of customCategory || systemCategory
    // is uncategorized == 'Other' or undefined?
    category: Category
    // customCategory?: string
    completed: boolean
    listId: number
}
