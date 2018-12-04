<template>
  <section>
    <li v-for="folder in folders">
      <tree-folder
        v-bind:folder="folder"
        @clicknode='clicknode'
      ></tree-folder>
    </li>
  </section>
</template>
<script>
import TreeFolder from "./treenode/treefond.vue";
export default {
  data: function() {
    return {
      folders: [
        {
          id: 1,
          name: "社工点1",
          children: [
            {
              id: 11,
              name: "社工点1-1",
              children: [
                {
                  id: 111,
                  name: "社工点1-1-1",
                  children: [
                    {
                      id: 1111,
                      name: "社工点1-1-1-1",
                      children: [
                        {
                          id: 11111,
                          name: "社工点1-1-1-1-1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 12,
              name: "社工点1-2",
              children: [
                {
                  id: 121,
                  name: "社工点1-2-1"
                },
                {
                  id: 122,
                  name: "社工点1-2-2"
                }
              ]
            }
          ]
        },
        {
          id: 1,
          name: "社工点1",
          children: [
            {
              id: 11,
              name: "社工点1-1",
              children: [
                {
                  id: 111,
                  name: "社工点1-1-1",
                  children: [
                    {
                      id: 1111,
                      name: "社工点1-1-1-1",
                      children: [
                        {
                          id: 11111,
                          name: "社工点1-1-1-1-1"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              id: 12,
              name: "社工点1-2",
              children: [
                {
                  id: 121,
                  name: "社工点1-2-1"
                },
                {
                  id: 122,
                  name: "社工点1-2-2"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    clicknode(id) {
      console.log(id);
    }
  },
  components: {
    TreeFolder
  }
};
</script>
<style  scoped>
li {
  list-style: none;
}
</style>
