<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-card
        class="mx-auto"
        max-width="300"
      >
        <v-list
          :items="items"
          item-title="name"
          item-value="id"
        ></v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Auctions</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AuctionService from '@/services/AuctionService'
import { onMounted } from "vue";
import { ref } from 'vue'

const auctionsList = ref([]);
const drawer = ref(null)
const items = [
  {
    name: 'About us',
    id: 1,
  },
  {
    name: 'Active auctions',
    id: 2,
  },
  {
    name: 'Future events',
    id: 3,
  },
];

const getAuctions = () => {
  AuctionService.getAuctions().then(response => {
    auctionsList.value = response.data;
  });
}

onMounted(() => {
  getAuctions();
})
</script>
