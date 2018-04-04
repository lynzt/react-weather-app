## following along w/ youtube video by...
channel: Hamza Mirza
* video 1: https://youtu.be/204C9yNeOYI
* video 2: https://youtu.be/P0vsGO4svUM

using: [openweathermap](https://openweathermap.org/)

#### docker stuff
docker build -t react/weather .

docker run -it \
  -v ${PWD}:/usr/src/app \
  -v /usr/src/app/node_modules \
  -p 3020:3000 \
  --rm \
  react/weather

#### to run
npm start
