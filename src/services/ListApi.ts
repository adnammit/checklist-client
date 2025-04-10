import axios from 'axios'
import { Item, ItemDto } from '../models/shoppingItem'
import ApiBase from './ApiBase'

const requestMgr = axios.create({
    baseURL: 'http://localhost:5064/list',
})

class ListApi extends ApiBase {
    // // TODO fetch categories
    // constructor() {
    //   this.getCategories();
    // }
    public async getList(): Promise<Item[]> {
        return requestMgr
            .get('/')
            .then((res) => {
                console.log('api res', res.data)
                return res.data
            })
            .catch((error) => {
                this.logError(error)
                throw error
            })
    }

    public async createListItem(item: ItemDto): Promise<Item> {
        return requestMgr
            .post('/item', {
                ...item,
            })
            .then((res) => {
                console.log('api res', res.data)
                return res.data
            })
            .catch((error) => {
                this.logError(error)
                throw error
            })
    }

    public async updateListItem(item: Item): Promise<Item> {
        return requestMgr
            .put(`/item/${item.id}`, {
                ...item,
            })
            .then((res) => {
                console.log('api res', res.data)
                return res.data
            })
            .catch((error) => {
                this.logError(error)
                throw error
            })
    }

    public async deleteListItem(id: number): Promise<Item> {
        return requestMgr
            .delete(`/item/${id}`)
            .then((res) => {
                console.log('api res', res.data)
                return res.data
            })
            .catch((error) => {
                this.logError(error)
                throw error
            })
    }
}

export default new ListApi()
