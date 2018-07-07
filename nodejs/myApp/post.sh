
url="http://localhost:3000"
json=${1}
cat $json

echo "curl -k -X POST -H "Content-Type: application/json" -d @${json} ${url}"
