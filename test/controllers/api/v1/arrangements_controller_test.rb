require "test_helper"

class Api::V1::ArrangementsControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get api_v1_arrangements_update_url
    assert_response :success
  end
end
