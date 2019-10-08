import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      tasks: [{
        name: "Clean Floor",
        priority: "Low"
      },{
        name: "Finish Homework",
        priority: "High"
      }],
      newTask: "",
      priority:""
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push({
          name: this.newTask,
          priority: this.priority
        });
        this.newTask = "";
      }
    }
  })
})
