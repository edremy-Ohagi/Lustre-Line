# Deployment Rules

## MVP Deployment

Use GitHub Pages for the first frontend MVP.

Reason:

- Easy to share with the founder.
- No server cost.
- Good enough for static review.

## Formal Deployment

Use DigitalOcean for the full-stack version.

Recommended route:

```text
DigitalOcean Droplet
Docker Compose
Nginx
Spring Boot API
PostgreSQL
Redis
DigitalOcean Spaces
```

## Why Droplet Over App Platform Later

Droplet is preferred for the formal version because it gives more operational control:

- Linux
- SSH
- Nginx
- Docker
- logs
- firewall
- reverse proxy
- service troubleshooting

App Platform is acceptable for quick deployment, but it gives less control over infrastructure details.

## Formal Deployment Requirements

- Database should not be publicly exposed.
- Backend should be proxied through Nginx.
- Admin should require login.
- Use environment variables for secrets.
- Use HTTPS before real customer use.
- Have a backup plan for database and uploaded images.

## Domain

No domain is available yet. Use temporary deployment URLs until a domain is chosen.
