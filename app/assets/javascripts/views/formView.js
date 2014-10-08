var FormView = Backbone.View.extend({
  id: 'addForm',
  events: {
    "click button": 'addTodo'
  },
  initialize: function(){
    this.template = _.template($('.addFormTemplate').html());
    // this.render();
  },
  render: function(){
    this.$el.html(this.template());
    $('#form').append(this.$el.html());
    // return this;
  },
  addTodo: function(){
    var description = $('#description').val();
    this.collection.addTodo(description);
  }
});
