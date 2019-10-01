class UsersController < ApplicationController

  def create
    email = User.all.select { |u| u.email == params[:email]}

    if email.length < 1
      user = User.create name: params[:name], email: params[:email], password: params[:password], cash: 5000.00
      render json: user
    else
      render json: {}
    end
  end
end
