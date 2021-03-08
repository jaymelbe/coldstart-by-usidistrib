<script>
import CardContent from '@/components/card-content.vue';
import ButtonFooter from '../../components/button-footer.vue';
import getUserInfo from '../../assets/js/userInfo';

export default {
  name: 'CatalogList',
  props: {
    icecreams: {
      type: Array,
      default: () => [],
    },
    errorMessage: {
      type: String,
      default: () => '',
    },
  },
  components: {
    CardContent,
    ButtonFooter,
  },
  data() {
    return {
      userInfo: {
        type: Object,
        default() {},
      },
      dataIndex: 0,
    };
  },
  async created() {
    this.userInfo = await getUserInfo();
  },
  methods: {
  },
};
</script>

<template>
  <div>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="!icecreams.length && !errorMessage">
      Loading data ...
    </div>
    <div class="container">
      <div
        v-for="(icecream) in icecreams"
        :key="icecream.Id"
        role="presentation"
      >
        <div class="card">
          <CardContent
            :name="icecream.Name"
            :description="icecream.Description"
            :imageurl="icecream.ImageUrl"
          />
          <footer v-if="auth" class="card-footer">
            <ButtonFooter
            class="edit-item"
            iconClasses="fas fa-shopping-cart"
            label="Pre-order"
            :dataIndex="index"
            :dataId=dataIndex+1
            />
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
