


docker run -d --restart=always --name wekan-db mongo:3.2.20

myip="10.3.0.1"
docker run -d --restart=always --name wekan --link "wekan-db:db" -e "MONGO_URL=mongodb://db" -e "ROOT_URL=http://$myip:8081" -p 8081:80 quay.io/wekan/wekan:v1.07
