<script>
import ButtonFooter from './button-footer.vue';

export default {
  name: 'CardContent',
  data() {
    return {
      label: 'Pre-order',
      iconClasses: 'fas fa-shopping-cart',
      className: 'edit-item',
      auth: true,
      dataIndex: 0,
    };
  },
  components: {
    ButtonFooter,
  },
  props: {
    id: {
      type: String,
      default: () => '',
    },
    name: {
      type: String,
      default: () => '',
    },
    description: {
      type: String,
      default: () => '',
    },
    imageurl: {
      type: String,
      default: () => '',
    },
  },
  methods: {
  },
};
</script>

<template>
  <div>
    <div class="card-content">
      <header class="card-header">
        <p class="card-header-title">{{ name }}</p>
      </header>

      <div class="content">
        <div class="catalog-image">
          <img v-bind:src="imageurl" />
        </div>
        <p class="description">{{ description }}</p>
      </div>
    </div>
    <footer v-if="auth" class="card-footer">
      <ButtonFooter
      :className='className'
      :label="label"
      :dataIndex=dataIndex
      :dataId=dataIndex+1
      :iconClasses="iconClasses" />
    </footer>
  </div>
</template>
