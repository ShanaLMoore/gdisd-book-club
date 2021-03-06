module Api
  module V1
    class JobsController < ApplicationController
      skip_before_filter :verify_authenticity_token 
      respond_to :json 
      def index 
        respond_with(Job.all.order("id DESC"))
      end 
      def show 
        respond_with(Job.find(params[:id]))
      end 
      def create 
        @job = Job.new(job_params) 
        if @job.save 
          respond_to do |format|
            format.json { render :json => @job }
          end 
        end 
      end 
      def update 
        @job = Job.find(params[:id])
        if @job.update(job_params) 
          respond_to do |format| 
            format.json { render :json => @job }
          end 
        end 
      end 
 
      def destroy 
        respond_with Job.destroy(params[:id]) 
      end 
      private 
        def job_params 
          params.require(:job).permit(:job_title, :company_name, :location, :url) 
        end

    end
  end
end
