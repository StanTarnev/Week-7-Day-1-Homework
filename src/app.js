import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      chores: [{
        name: "Clean Floor",
        priority: "Low"
      },{
        name: "Finish Homework",
        priority: "High"
      }],
      newItem: "",
      priority:""
    },
    methods: {
      saveNewItem: function(){
        this.chores.push({
          name: this.newItem,
          priority: this.priority
          // priority:
        }
        );
        this.newItem = "";
      }
    }
  })
})
