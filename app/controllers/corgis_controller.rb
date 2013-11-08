class CorgisController < ApplicationController
  def index
    respond_to do |format|
      format.html render @corgis = Corgi.all
      format.json render @corgis = Corgi.page(params[:page])
    end
  end
end
