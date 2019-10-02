class TransactionsController < ApplicationController

  def create
    user = User.all.find_by email: params[:user][:email], password: params[:user][:password]

    # Check if user can afford stocks
    if user.cash > (params[:price] * params[:shares])
      # Create Transaction
      transaction = Transaction.create ticker: params[:ticker], shares: params[:shares], price: params[:price], user_id: user.id

      user.update cash: user.cash - (params[:price] * params[:shares])

      # Update / Create new stock in portfolio
      stock = Stock.all.find_by ticker: params[:ticker], user_id: user.id

      if stock
        stock.update shares: stock.shares + params[:shares]
      else
        stock = Stock.create ticker: params[:ticker], shares: params[:shares], user_id: user.id
      end
      render json: {
        transaction: transaction,
        user: user,
        stock: stock
      }
    else
      render json: {}
    end
  end
end
