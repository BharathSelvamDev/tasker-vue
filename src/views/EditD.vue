<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        elevation="2"
        class="mx-2"
        color="primary"
        small
        v-bind="attrs"
        v-on="on"
      >
        <v-icon left> mdi-pencil </v-icon>
        Edit
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Edit Task</v-toolbar>
        <v-card-text style="margin-top: 20px; padding-bottom: 0px">
          <div class="text-h2">
            <v-text-field v-model="mname" label="Name" required></v-text-field>
          </div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn depressed color="primary" @click="UpdateTask()">Update</v-btn>
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
  name: "EditD",
  props: ["id", "name"],
  data() {
    return {
      mid: this.id,
      mname: this.name,
    };
  },
  methods: {
    UpdateTask() {
      if (this.mname.length < 1) {
        Swal.fire("Please Enter Task Name");
      } else if (this.mname.trim().length < 1) {
        Swal.fire("Invalid Task Name");
      } else {
        axios
          .post(
            "https://vue-api-boot.herokuapp.com/updatetask/" + this.mid + "/" + this.mname
          )
          .then((response) => {
            console.log(response.data);
            this.$store.commit("Refresh");
            if (response.data == "Updated") {
              Swal.fire({
                icon: "success",
                title: "Task Updated",
                showConfirmButton: true,
                timer: 1000,
              });
            } else {
              Swal.fire("Error");
            }
          });
      }
    },
  },
};
</script>

<style>
</style>