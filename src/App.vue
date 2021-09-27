<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <div class="nav-btns">
          <router-link to="/">
            <v-btn text> Vue App </v-btn>
          </router-link>
        </div>
        <div class="nav-btns">
          <router-link to="/">
            <v-btn depressed color="primary"> Home </v-btn>
          </router-link>
        </div>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main> <router-view></router-view> </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.nav-btns {
  margin-left: 20px;
}
</style>