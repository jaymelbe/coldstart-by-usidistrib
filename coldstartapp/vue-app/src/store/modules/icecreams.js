import axios from 'axios';
import API from '../config';
import { parseItem, parseList } from './action-utils';
import { GET_ICECREAMS, ADD_ICECREAM } from './mutation-types';

const captains = console;

export default {
  strict: process.env.NODE_ENV !== 'production',
  namespaced: true,
  state: {
    orders: [],
  },
  mutations: {
    [GET_ICECREAMS](state, icecreams) {
      state.icecreams = icecreams;
    },
    [ADD_ICECREAM](state, icecream) {
      state.icecreams.unshift(icecream);
    },
  },
  actions: {
    async getIcecreamsAction({ commit }) {
      try {
        const response = await axios.get(`${API}/orders`);
        const icecreams = parseList(response);
        commit(GET_ICECREAMS, icecreams);
        return icecreams;
      } catch (error) {
        captains.error(error);
        throw new Error(error);
      }
    },
    async buyIcecreamAction({ commit }, icecream) {
      try {
        captains.log('buy ice cream action 1')
        const response = await axios.post(`${API}/orders`, icecream);
        captains.log('buy ice cream action 2')
        const addedIcecream = parseItem(response, 201);
        captains.log('buy ice cream action 3')
        commit(ADD_ICECREAM, addedIcecream);
        captains.log('buy ice cream action 4')
        return addedIcecream;
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
