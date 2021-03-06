class MovementsController < ApplicationController
  before_action :set_movement, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_muscle]

  # GET /movements
  def index
    @movements = Movement.all

    render json: @movements
  end

  # GET /movements/1
  def show
    render json: @movement, include: :muscles
  end

  # POST /movements
  def create
    @movement = Movement.new(movement_params)
    @movement.user = @current_user

    if @movement.save
      render json: @movement, status: :created, location: @movement
    else
      render json: @movement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movements/1
  def update
    if @movement.update(movement_params)
      render json: @movement
    else
      render json: @movement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movements/1
  def destroy
    @movement.destroy
  end

  # PUT /movements/1/muscles/2
  def add_muscle
    @movement = Movement.find(params[:id])
    @muscle = Muscle.find(params[:muscle_id])
    @movement.muscles << @muscle

    render json: @movement, include: :muscles
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movement
      @movement = Movement.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def movement_params
      params.require(:movement).permit(:name, :user_id)
    end
end
