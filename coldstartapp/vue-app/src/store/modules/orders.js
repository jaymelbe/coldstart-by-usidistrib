import axios from 'axios';
import API from '../config';
import { parseList } from './action-utils';
import GET_ORDERS from './mutation-types';
import POST_ORDERS from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: {
    [GET_ORDERS](state, orders) {
      state.orders = orders;
    },
    [POST_ORDERS](state, orders) {
      state.orders = orders;
    },
  },
  actions: {
    async getOrdersAction({ commit }) {
      try {
        const response = await axios.get(`${API}/orders`);
        const orders = parseList(response);
        commit(GET_ORDERS, orders);
        return orders;
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
    async postOrderAction({ commit }) {
      try {
        const response = await axios.post(`${API}/orders`);
        const orders = parseList(response);
        commit(POST_ORDERS, orders);
        return orders;
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
  },
  getters: {
    orders: (state) => state.orders,
  },
};
