# Nuxt Example with PostgreSQL

## Project Overview
This Nuxt 3 application demonstrates integration with a PostgreSQL database, showcasing server-side operations in a Nuxt environment. Built with Nuxt 3, the project leverages pg (PostgreSQL client for Node.js) for backend database interactions and Vue for frontend development.

## Getting Started

### Prerequisites
- Node.js and npm/pnpm/yarn installed
- PostgreSQL database server

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/L422Y/nuxt-example-postgres.git
cd nuxt-example-postgres
# npm
npm install
# or pnpm
pnpm install
# or yarn
yarn install
```

### Database Configuration
Configure your PostgreSQL database connection in `server/plugins/pg.ts`. The default configuration uses the RNA Central public database. Set environment variables for the database user, host, database name, and password for your PostgreSQL connection.

### Running the Development Server
Start the development server on `http://localhost:3000`:
```bash
# npm
npm run dev
# or pnpm
pnpm run dev
# or yarn
yarn dev
```

### Building for Production
Build the application for production:
```bash
# npm
npm run build
# or pnpm
pnpm run build
# or yarn
yarn build
```

## Key Components

### API Endpoints
The API endpoint at `server/api/test.get.ts` demonstrates a simple database query operation.

### Data Model
Data models, such as `RowInterface` in `types/RowInterface.ts`, represent the structure of the database rows and are used for type checking and data handling.

### Nuxt Configuration
The Nuxt configuration is defined in `nuxt.config.ts`. It includes basic settings for development tools.

## Additional Resources
- [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
