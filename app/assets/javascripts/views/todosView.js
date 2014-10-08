var TodosView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
  },
  addOne: function(todoItem){
    var todoView = new TodoView({model: todoItem});
    this.$el.append(todoView.render().el);
  },
  addAll: function(){
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
  },
  render: function(){
    this.addAll();
    return this;
  }
});
