<script>
import { mapActions, mapGetters } from 'vuex';
import ListHeader from '@/components/list-header.vue';
import IceCreamsList from './icecreams-list.vue';

export default {
  name: 'IceCreams',
  data() {
    return {
      errorMessage: '',
      message: '',
      routePath: '/icecreams',
      title: 'My Ice Creams',
    };
  },
  components: {
    ListHeader,
    IceCreamsList,
  },
  async created() {
    await this.getIceCreams();
  },
  computed: {
    ...mapGetters('icecreams', { catalog: 'icecreams' }),
  },
  methods: {
    ...mapActions('icecreams', ['getIceCreamsAction']),
    async getIceCreams() {
      this.errorMessage = undefined;
      try {
        await this.getIceCreamsAction();
      } catch (error) {
        this.errorMessage = 'Unauthorized';
      }
    },
  },
};
</script>

<template>
  <div class="content-container">
    <ListHeader :title="title" @refresh="getCatalog" :routePath="routePath">
    </ListHeader>
    <div class="columns is-multiline is-variable">
      <div class="column" v-if="catalog">
        <IceCreamsList
          :icecreams="catalog"
          :errorMessage="errorMessage"
        ></IceCreamsList>
      </div>
    </div>
  </div>
</template>
