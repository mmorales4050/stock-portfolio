class TransactionsController < ApplicationController

  def create
    user = User.all.find_by email: params[:user][:emails], password: params[:user][:password]


  end
end
