class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger", age: 26 }
  end
end
