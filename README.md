# Proof of Concept for roslib.js

## Installation

Make a virtual environment and run:

```
pip install -r requirements.txt
```

Move into `catkin_ws` and run:

```
catkin_make
```

If you don't have it already, you may need to run:

```
apt-get install ros-melodic-rosbridge-server
```

## Usage

Start the ROS-Bridge with:

```
roslaunch hmi_bridge websocket.launch
```

Open `./catkin_ws/src/hmi_bridge/hmi/hmi.html` in a browser.
Run:

```
rostopic echo /hmi_pub
```

Run:

```
rostopic pub /hmi_sub std_msgs/String "data: 'Your Message'" -1
```
