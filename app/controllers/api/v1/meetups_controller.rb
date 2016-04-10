module Api
  module V1
    class MeetupsController < ApplicationController
      def index
        params = { group_id: '16230312',
          format: 'json',
          page: '50'}
        meetup_api = MeetupApi.new
        events = meetup_api.events(params)

        render json: events
      end
    end
  end
end

