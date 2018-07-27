
kubectl run medium-api \
  --image=evenchange4/micro-medium-api:latest \
  --port=80 \

kubectl get deployments
kubectl get pods -o wide

kubectl expose deployment medium-api --type=LoadBalancer --target-port=3000


