# HarmanStock

## General details:

Configuration:
--------------
1) OS: Ubuntu 18.04,
2) Editor: Atom 1.33.1x64,
3) Git: git version 2.17.1,
4) Terminal: GNOME Terminal 3.28.2,
5) Cli: @angular/cli,
6) node: v8.15.0,
7) npm: 6.4.1

Project creation and execution:
-------------------------------
1) sudo npm install -g @angular/cli
2) creation angular project ng new <project_foleder>
3) I have used Chart.js for stock visualization
4) Create Sample data in angular root folder name as data.json
5) Install and start data server 
   i) npm install -g json-server
  ii) json-server --watch data.json --port 4000
6) Run front end app using ng serve --open 
7) proble-2 solution in inside project directory seperate folder harman-stock-buy-sell.js and datas are [100, 180, 260, 310, 40, 535, 695];

# Run Procedure

* Run data server

`json-server --watch data.json --port 4000`

* Run UI server

`ng serve --open`

