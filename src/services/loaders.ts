import ListApi from './ListApi';

export async function shoppingLoader() {
  const items = await ListApi.getList();
  console.log('items in loader', items);
  return items;
}
