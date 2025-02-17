import { Category } from './category';

export default interface Item {
	name: string,
	notes?: string,
	// TODO: make category a computed property of customCategory || systemCategory
	// is uncategorized == 'Other' or undefined?
	category: Category,
	customCategory?: string,
	isDone: boolean
}
