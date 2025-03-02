# YBF Website Project

This repository contains both the frontend website and the Sanity CMS backend for the YBF website. The project is structured with the frontend code in the `frontend` directory and the Sanity Studio configuration in the root directory.

## Project Structure

- `/frontend` - Next.js frontend application
- `/` (root) - Sanity Studio configuration and schema

## Setup Instructions

### Prerequisites

- Node.js (v16 or later)
- pnpm (recommended) or npm

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   pnpm install
   ```
   or
   ```
   npm install
   ```

3. Start the development server:
   ```
   pnpm dev
   ```
   or
   ```
   npm run dev
   ```

4. The frontend will be available at `http://localhost:3000`

### Sanity Studio Setup

1. From the root directory, install dependencies:
   ```
   pnpm install
   ```
   or
   ```
   npm install
   ```

2. Log in to your Sanity account:
   ```
   npx sanity login
   ```

3. Start the Sanity Studio development server:
   ```
   pnpm dev
   ```
   or
   ```
   npm run dev
   ```

4. The Sanity Studio will be available at `http://localhost:3333`

## Environment Variables

### Frontend

Create a `.env.local` file in the `frontend` directory with the following variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-05
```

### Sanity Studio

The Sanity Studio configuration is already set up in `sanity.config.ts` with the project ID.

## Deployment

### Frontend

The frontend can be deployed to Vercel or any other Next.js-compatible hosting service.

### Sanity Studio

To deploy the Sanity Studio:

```
pnpm deploy
```
or
```
npm run deploy
```

## Troubleshooting

### Restoring Deleted Singleton Documents

If the "Soup of the Day" (dailySpecial) document gets deleted, follow these steps to restore it:

1. Log in to Sanity CLI:
   ```
   npx sanity login
   ```

2. Create a file named `create-daily-special.json` with the following content:
   ```json
   {
     "_id": "dailySpecial",
     "_type": "dailySpecial",
     "name": "Soup of the Day",
     "description": "Our delicious homemade soup"
   }
   ```

3. Create the document using the Sanity CLI:
   ```
   sanity documents create create-daily-special.json
   ```

4. The "Soup of the Day" document should now be restored and accessible in the Sanity Studio.

### Alternative Restoration Method

You can also use the provided `restore-daily-special.js` script:

1. Update the script with your Sanity write token
2. Run the script:
   ```
   node restore-daily-special.js
   ```

## Content Management

### Key Content Types

- **Daily Special (Soup)**: Singleton document for the soup of the day
- **Weekly Special**: Featured sandwich of the week
- **Bundles**: Meal bundle offerings
- **Specialty Meats**: Special meat products
- **Deli Items**: Cold cuts, cheeses, and salads

### Content Updates

All content can be managed through the Sanity Studio interface. After making changes, they will be reflected on the frontend website after a short delay (typically a few seconds).

## Development

### Generating TypeScript Types

To update TypeScript types based on your Sanity schema:

```
pnpm generate-types
```
or
```
npm run generate-types
```

### Customizing the Schema

The Sanity schema is defined in the `schemaTypes` directory. After making changes to the schema, restart the Sanity Studio server for the changes to take effect.
