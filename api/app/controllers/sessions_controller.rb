class SessionsController < ApplicationController

  def create
    user = User.all.find_by email: params[:email].downcase, password: params[:password]

    if user
      render json: {
        name: user.name,
        email: user.email,
        password: user.password,
        cash: user.cash,
        stocks: Stock.all.select { |s| s.user_id == user.id},
        transactions: Transaction.all.select { |t| t.user_id == user.id}
      }
    else
      render json: {}
    end
  end


  def destroy

  end
end
