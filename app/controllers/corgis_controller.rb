class CorgisController < ApplicationController
  def index
    respond_to do |format|
      @corgis = Corgi.page(params[:page])
      format.html { render @corgis  }
      format.json { render :json => @corgis.as_json }
    end
  end
end
