import { Category } from './category';

export default interface Item {
  id: number;
  name: string;
  notes?: string;
  quantity?: number;
  // TODO: make category a computed property of customCategory || systemCategory
  // is uncategorized == 'Other' or undefined?
  category: Category;
  customCategory?: string;
  completed: boolean;
}
