
kubectl run grafana \
  --image=grafana/grafana:5.1.0 \
  --port=80 \

kubectl get deployments
kubectl get pods -o wide

kubectl expose deployment grafana --type=LoadBalancer --target-port=3000


