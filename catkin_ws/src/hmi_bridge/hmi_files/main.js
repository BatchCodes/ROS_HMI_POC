const ros = new ROSLIB.Ros({
  url: "ws://localhost:9090",
});

const replaceStatus = (value) => {
  document.getElementById("status").innerHTML = value;
};
ros.on("connection", () => replaceStatus("Connected"));
ros.on("error", (error) => replaceStatus(`Error: ${error}`));
ros.on("close", () => replaceStatus("Closed"));

const hmi_subscriber = new ROSLIB.Topic({
  ros: ros,
  name: "/hmi_sub",
  messageType: "std_msgs/String",
});

hmi_subscriber.subscribe((message) => {
  document.getElementById("msg").innerHTML = message.data;
});

hmi_publisher = new ROSLIB.Topic({
  ros,
  name: "/hmi_pub",
  messageType: "std_msgs/String",
});

const publish_text_field = () => {
  const data = document.getElementById("pub_input").value;
  const message = new ROSLIB.Message({ data });
  hmi_publisher.publish(message);
};
