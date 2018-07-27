
kubectl run medium-api \
  --image=evenchange4/micro-medium-api:latest \
  --port=3000
kubectl get deployments
kubectl get pods -o wide

kubectl expose deployment medium-api --type=LoadBalancer


