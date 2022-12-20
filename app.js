new Vue({
  el: "#vue-app",
  data: {
    title: "",
    todos: [],
    loading: true,
  },

  async mounted() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();

    this.todos = todos;

    setTimeout(() => {
      this.loading = false;
    }, 300);
  },

  methods: {
    createTodo() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.title = "";
        this.todos.push(newTodo);
      }
    },

    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
