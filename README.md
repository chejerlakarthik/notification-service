# notification-service
A simple notification service

# Build
docker build -t chejerlakarthik/notification-service .

# Run
docker run -p 3000:3000 -e SENDGRID_API_KEY=*key* chejerlakarthik/notification-service