<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn elevation="2" class="mx-2" color="success" v-bind="attrs" v-on="on"
        >Add Task</v-btn
      >
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Edit Task</v-toolbar>
        <v-card-text style="padding-bottom: 0px; margin-top: 20px">
          <div class="text-h2">
            <v-text-field
              v-model="taskName"
              label="Name"
              required
            ></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn depressed color="primary" @click="AddTask()">Add Task</v-btn>
          <v-btn depressed color="error" @click="dialog.value = false"
            >Close</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "AddD",
  data() {
    return {
      taskName: "",
    };
  },
  methods: {
    AddTask() {
      if (this.taskName.length < 1) {
        Swal.fire("Please Enter Task Name");
      } else if (this.taskName.trim().length < 1) {
        Swal.fire("Invalid Task Name");
      } else {
        axios
          .post("https://vue-api-boot.herokuapp.com/addtasks/" + this.taskName)
          .then((response) => {
            console.log(response.data);
            this.taskName = "";
            this.$store.commit("Refresh");
          });
      }
    },
  },
};
</script>

<style>
</style>