class ApplicationController < ActionController::API
  def hello_world
    put 'アクセスあったよ'
    render json: { text: "Hello World まーちゃん" }
  end
end
