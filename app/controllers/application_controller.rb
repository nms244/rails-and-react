class ApplicationController < ActionController::API
  def hello_world
    puts 'アクセスあったよ'
    render json: { text: "Hello World まーちゃん" }
  end
end
