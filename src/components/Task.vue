<template>
  <div class="task noselect">
    <v-card style="margin: 1% 10% 2% 10%">
      <v-card-title>
        Tasks

        <v-spacer></v-spacer>
        <BottomSheet />
        <AddD />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :search="search"
        :items="this.$store.state.infos"
        fixed-header
        height="350px"
        style="margin: 1% 5% 1% 5%"
      >
        <template v-slot:item="row">
          <tr
            :style="row.item.active === true ? '' : 'background-color: #e1e5e8'"
            @dblclick="DoubleClicked(row.item.taskId, row.item.active)"
          >
            <!-- <td>
              {{ row.item.taskId }}
            </td> -->
            <td>
              <h4 :class="row.item.active === true ? '' : 'striked'">
                {{ row.item.task }}
              </h4>
            </td>
            <td v-if="row.item.active === false">
              <v-btn disabled elevation="2" class="mx-2" small>
                <v-icon left> mdi-pencil </v-icon> Edit
              </v-btn>
            </td>
            <td v-if="row.item.active === true">
              <EditD
                :id="row.item.taskId"
                :name="row.item.task"
                v-on:close="this.$store.commit('Refresh')"
              />
            </td>
            <td>
              <v-btn
                class="mx-2"
                @click="DeleteTask(row.item.taskId)"
                dark
                small
                color="pink"
              >
                <v-icon left> mdi-cancel </v-icon>
                Delete
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import BottomSheet from "@/components/BottomSheet.vue";
import AddD from "../views/AddD.vue"
import EditD from "../views/EditD.vue"
export default {
  name: "Task",
  components: {
    EditD,
    AddD,
    BottomSheet,
  },
  data() {
    return {
      active: true,
      sheet: false,
      search: "",
      headers: [
        // { text: "Task Id", value: "task_id" },
        { text: "Task Name", value: "task_name" },
        { text: "Edit Task", value: "task_edit" },
        { text: "Delete Task", value: "task_delete" },
      ],
      infos: [],
    };
  },
  methods: {
    DeleteTask(id) {
      axios.post("https://vue-api-boot.herokuapp.com/deletetasks/" + id).then((response) => {
        console.log(response.data);
        this.$store.commit("Refresh");
      });
    },
    DoubleClicked(id, active) {
      console.log(active);
      if (active) {
        axios.post("https://vue-api-boot.herokuapp.com/comtask/" + id).then((response) => {
          console.log(response.data);
          this.$store.commit("Refresh");
        });
      } 
      else {
        axios.post("https://vue-api-boot.herokuapp.com/icomtask/" + id).then((response) => {
          console.log(response.data);
          this.$store.commit("Refresh");
        });
      }
    },
    // Refresh() {
    //   axios.get("http://localhost:8090/gettasks").then((response) => {
    //     console.log(response.data);
    //     this.infos = response.data;
    //   });
    // },
  },
  mounted() {
    this.$store.commit("Refresh");
  },
};
</script>

<style scoped lang="scss">
.task {
  padding: 5px;
  margin: 0 auto;
  margin-top: 2%;
  margin-left: 2%;
}

.striked {
  text-decoration: line-through;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
}
</style>