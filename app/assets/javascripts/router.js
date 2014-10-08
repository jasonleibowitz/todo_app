var TodoApp = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "todos/:id": "show",
    "add": "create"
  },
  initialize: function(){
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();
  },
  index: function(){
    $('#app').html(this.todosView.el);
    this.todoItems.fetch();
  },
  start: function(){
    Backbone.history.start();
  },
  show: function(id){
    this.todoItems.focusOnTodoItem(id);
  },
  create: function(){
    this.formView = new FormView({collection: this.todoItems});
    this.todosView.$el.empty();
    this.formView.render();
  }
}));
