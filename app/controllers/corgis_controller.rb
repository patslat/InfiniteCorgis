class CorgisController < ApplicationController
  def index
    @corgis = Corgi.all
    respond_to do |format|
      format.html { render @corgis  }
      format.json {
        render :json => @corgis
      }
    end
  end
end
