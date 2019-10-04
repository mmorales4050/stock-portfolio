class UsersController < ApplicationController

  def create
    email = User.all.select { |u| u.email == params[:email].downcase}

    if email.length < 1
      user = User.create name: params[:name], email: params[:email].downcase, password: params[:password], cash: 5000.00
      render json: {
        name: user.name,
        email: user.email,
        password: user.password_digest,
        cash: user.cash,
        stocks: [],
        transactions: []
      }
    else
      render json: {}
    end
  end
end
