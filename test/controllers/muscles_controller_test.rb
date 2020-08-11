require 'test_helper'

class MusclesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @muscle = muscles(:one)
  end

  test "should get index" do
    get muscles_url, as: :json
    assert_response :success
  end

  test "should create muscle" do
    assert_difference('Muscle.count') do
      post muscles_url, params: { muscle: { name: @muscle.name, note: @muscle.note } }, as: :json
    end

    assert_response 201
  end

  test "should show muscle" do
    get muscle_url(@muscle), as: :json
    assert_response :success
  end

  test "should update muscle" do
    patch muscle_url(@muscle), params: { muscle: { name: @muscle.name, note: @muscle.note } }, as: :json
    assert_response 200
  end

  test "should destroy muscle" do
    assert_difference('Muscle.count', -1) do
      delete muscle_url(@muscle), as: :json
    end

    assert_response 204
  end
end
