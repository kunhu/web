
kubectl run medium-api-2nd \
  --image=evenchange4/micro-medium-api:latest \
  --port=81 \

kubectl get deployments
kubectl get pods -o wide

kubectl expose deployment medium-api-2nd --type=LoadBalancer --target-port=3000


