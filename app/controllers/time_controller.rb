class TimeController < ActionController::API
  include MqttBroker

  def get_time
    render json: { time: Time.now }
  end

  def set_time
    # debugger
    Timer.create!(time: params[:time])
    render json: :ok, status: :ok
  end

  def get_time_now
    render json: Timer.last.time
  end

  def publish_time_mqtt
    publish_mqtt('uri/sistemas-distribuidos/time', params[:time])
  end
end
