myservice=$1
kubectl expose deployment $myservice --type=LoadBalancer
