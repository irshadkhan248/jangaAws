<template>
  <q-page>
    <div class="q-pa-md">
      <q-table :data="data" :columns="columns" row-key="name">
        <!-- <template v-slot:top>
          <div class="col-2 q-table__title">Project</div>
          <q-space></q-space>

          <q-btn to="/Company/create" class="float-right" color="green" size="xs">create</q-btn>
        </template>-->
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{
              col.label
              }}
            </q-th>
            <q-th class="text-left">Operations</q-th>
          </q-tr>
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{
              props.row[col.name]
              }}
            </q-td>
            <q-td>
              <div class="fit row inline wrap justify-start items-start content-start">
                <div>
                  <q-btn
                    color="info"
                    size="xs"
                    @click="goToPage(props.row._id)"
                    class="q-mr-md"
                  >Edit</q-btn>
                </div>
                <div class="col" @click="setId(props.row._id)">
                  <DeleteButton
                    :data="{
                      id: id
                    }"
                    v-on:event_child="delete1"
                  ></DeleteButton>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>
<script>
// import EditButton from "../Edit/EditButton";
import DeleteButton from "components/Delete/DeleteButton";
export default {
  data() {
    return {
      id: ""
    };
  },
  components: { DeleteButton },
  props: ["columns", "data", "pagination", "module"],
  created() {},
  methods: {
    goToPage(id) {
      console.log("this.module", this.module);

      this.$router.push(this.module.link + "?id=" + id);
    },
    setId(id) {
      this.id = id;
    },
    delete1(data) {
      this.$emit("delete_Refresh", data);
    },
    edit() {}
  }

  // this.editRout = "/"+this.mnodule+"/edit"
};
</script>
