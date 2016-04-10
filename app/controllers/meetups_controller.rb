class MeetupsController < ApplicationController
  def index
    render json: events
  end
end
