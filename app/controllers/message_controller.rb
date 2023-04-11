class MessageController < ApplicationController
  def index
    message = Message.order('Random()').first

    respond_to do |format|
      if message
        format.html { render json: message }
      else
        format.html { render json: { message: 'There is no greeting message' } }
      end
    end
  end
end
