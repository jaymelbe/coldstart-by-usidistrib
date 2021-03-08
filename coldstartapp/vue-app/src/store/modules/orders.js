import axios from 'axios';
import API from '../config';
import { parseItem, parseList } from './action-utils';
import { GET_ORDERS, POST_ORDERS } from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: {
    [GET_ORDERS](state, icecreams) {
      state.icecreams = icecreams;
    },
    [POST_ORDERS](state, icecream) {
      state.icecreams.unshift(icecream);
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
    async postOrderAction({ commit }, order) {
      try {
        const response = await axios.post(`${API}/orders`, order);
        const newOrder = parseItem(response, 201);
        commit(POST_ORDERS, newOrder);
        return newOrder;
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
  },
  getters: {
    icecreams: (state) => state.icecreams,
  },
};
