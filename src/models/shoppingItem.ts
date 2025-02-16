import { Category } from './category';

export default interface Item {
	name: string,
	category: Category,
	customCategory?: string,
	isDone: boolean
}
