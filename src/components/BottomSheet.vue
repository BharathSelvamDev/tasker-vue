<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-2"
          color="primary"
          fab
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-exclamation</v-icon>
          <!-- <v-icon>mdi-format-list-bulleted-square</v-icon> -->
        </v-btn>
      </template>
      <v-sheet class="text-center" height="100px">
        <v-btn class="ma-2" outlined color="indigo" @click="sheet = !sheet">
          close
        </v-btn>
        <div class="my-3">Double Click On Task Name to Complete</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
  }),
};
</script>