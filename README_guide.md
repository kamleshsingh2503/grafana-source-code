## Get started

- [Get Grafana](https://grafana.com/get)
- [Installation guides](http://docs.grafana.org/installation/)

Unsure if Grafana is for you? Watch Grafana in action on [play.grafana.org](https://play.grafana.org/)!

## Documentation

The Grafana documentation is available at [grafana.com/docs](https://grafana.com/docs/).

## Dependencies
  1. Go (Latest Stable)
  2. Git
  3. NodeJS LTS
  4. node-gyp is the Node.js native addon build tool and it requires extra dependencies: python 2.7, 
     make and GCC. These are already installed for most Linux distros and MacOS.

## Source Build Steps
 
 - Get Source code 
  1. go get github.com/grafana/grafana

 - Building the backend
  2. cd src/github.com/grafana/grafana
  3. go run build.go setup
  4. go run build.go build 

 - Build the Frontend Assets
  5. npm install -g yarn
  6. yarn install --pure-lockfile
  7. yarn start

 - Running Grafana Locally
  8. ./bin/grafana-server
     Or, if you built the binary with go run build.go build, run ./bin/<os>-<architecture>/grafana-server
     If you built it with go build ., run ./grafana
