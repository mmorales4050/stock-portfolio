class SessionsController < ApplicationController

  def create
    user = User.all.select { |u| u.email == params[:email] && u.password == params[:password]}

    if user.length < 1
      render json: {}
    else
      render json: {
        name: user[0].name,
        email: user[0].email,
        password: user[0].password,
        cash: user[0].cash
      }
    end
  end


  def destroy

  end
end
