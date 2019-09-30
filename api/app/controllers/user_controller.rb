class UserController < ApplicationController

  def create
    User.create name: params[:name], email: params[:email], password: params[:password], cash: 5000.00
  end
end
