import { Category } from './category';

export default interface Item {
	name: string,
	// TODO: make category a computed property of customCategory || systemCategory
	category: Category,
	customCategory?: string,
	isDone: boolean
}
