import axios from 'axios';
import shoppingItem from '../models/shoppingItem';
import ApiBase from './ApiBase';

const requestMgr = axios.create({
  baseURL: 'http://localhost:5064',
});

class ListApi extends ApiBase {
  // // TODO fetch categories
  // constructor() {
  //   this.getCategories();
  // }
  public async getList(): Promise<shoppingItem[]> {
    return requestMgr.get('/list').then((res) => {
      console.log('api res',res.data);
      return res.data;
    })
    .catch(error => {
      this.logError(error);
      throw error;
    })
  }
}

export default new ListApi();
