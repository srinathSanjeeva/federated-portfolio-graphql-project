# Apollo Gateway

## Overview
Apollo Gateway is a federated GraphQL gateway that connects multiple subgraphs to form a single, unified GraphQL API. This repository serves as the gateway for your federated GraphQL setup, combining subgraphs like `user-service`, `product-service`, and `order-service` into a single entry point.

## Features
- Federates multiple GraphQL subgraphs.
- Supports GraphQL Federation directives like `@key` and `@requires`.
- Placeholder subgraph support for services under development.
- Environment-based configuration for subgraph endpoints.

## Folder Structure
```
apollo-gateway/
├── src/
│   ├── index.js                # Main entry point for Apollo Gateway
│   ├── placeholder-subgraph.js # Optional placeholder subgraph for missing services
├── package.json                # Project metadata and dependencies
├── .env                        # Environment variables for subgraph URLs
└── README.md                   # Documentation for the gateway setup
```

## Prerequisites
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/apollo-gateway.git
   cd apollo-gateway
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration
Set subgraph URLs in the `.env` file:
```env
USER_SERVICE_URL=http://localhost:8081/graphql
PRODUCT_SERVICE_URL=http://localhost:4000/graphql
ORDER_SERVICE_URL=http://localhost:8083/graphql
```

If a subgraph is not ready, you can use the `placeholder-subgraph.js` as a temporary endpoint.

## Usage
### Start the Gateway
To start the Apollo Gateway:
```bash
npm start
```

The gateway will be available at `http://localhost:4000`.

### Start in Development Mode
For hot-reloading during development:
```bash
npm run dev
```

### Start Placeholder Subgraph
To run the placeholder subgraph:
```bash
npm run start:placeholder
```

## Deployment
### Build
Generate a deployable `dist` directory:
```bash
npm run build
```

### Deploy
Package the `dist` folder and deploy it to your server or container:
```bash
zip -r apollo-gateway.zip dist
scp apollo-gateway.zip user@your-server:/path/to/deploy
```

On the server:
```bash
unzip apollo-gateway.zip
cd dist
npm install --production
node src/index.js
```

## Development
### Adding a New Subgraph
1. Deploy the subgraph.
2. Add its endpoint to the `.env` file.
   ```env
   NEW_SERVICE_URL=http://localhost:8084/graphql
   ```
3. Update the `serviceList` in `src/index.js`:
   ```javascript
   { name: 'new-service', url: process.env.NEW_SERVICE_URL }
   ```

4. Restart the gateway:
   ```bash
   npm start
   ```

## Troubleshooting
### Common Issues
1. **Service not found**:
    - Ensure the subgraph URL is correct and the service is running.
    - Test the endpoint with a tool like Postman or `curl`.

2. **Schema mismatch**:
    - Verify the subgraph schema includes required Federation directives like `@key`.

3. **Environment variables not loaded**:
    - Ensure the `.env` file exists and contains valid entries.
    - Restart the gateway after modifying the `.env` file.

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes and push to your fork.
4. Submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Apollo Federation Documentation](https://www.apollographql.com/docs/federation/)
- [GraphQL Specification](https://graphql.org/)

