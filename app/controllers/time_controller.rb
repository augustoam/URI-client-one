class TimeController < ActionController::API
  include MqttBroker

  def publish_time_mqtt
    publish_mqtt('uri/sistemas-distribuidos/time', 'one ' + params[:time].to_s)
  end

  def get_time
    Timer.last
  end
end
