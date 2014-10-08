class TodosController < ApplicationController

  before_filter :load_todo, only: %w(show update destroy)
  respond_to :json

def index
  @todos = Todo.all
  respond_with @todos
end

def show
  respond_with @todo
end

def update
  @todo.update_attributes todo_update_params
  respond_with @todo
end

def create
  @todo = Todo.create todo_create_params
  respond_with @todo
end

def destroy
  @todo.destroy
  respond_with @todo
end

private
def load_todo
  @todo = Todo.find params[:id]
end

def todo_update_params
  params.require(:todo).permit(:status)
end

def todo_create_params
  params.require(:todo).permit(:description)
end

end
