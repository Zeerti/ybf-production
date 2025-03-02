// Make sure to run this from your Sanity project root (where sanity.config.ts is)
// Not from the frontend folder

import { createClient } from 'next-sanity';

// Create a Sanity client - this will use your logged-in credentials
const client = createClient({
  projectId: 'che1sfre',
  dataset: 'production',
  apiVersion: '2024-03-05',
  useCdn: false,
  token: 'skyZjNjkhUneFIjarSFKuDMuRSy8SiMJWl2tLAFlSIFSEnd7EDmwDTPo9WH3nTtDgP3OzSDu5XH9x3ZSeHkCAHSPubjbq5bDUussTjrfN4OONayuji9mwKZO7LHhpwj9BLTLvItz3i0rEG9S4yeHPiJnGThzdPvmBKP9qmOjDxt5yJsiAdNb' // Set this as an environment variable
});

// Create a new dailySpecial document with the ID expected by your structure
async function createDailySpecial() {
  try {
    const doc = {
      _id: 'dailySpecial', // This ID matches what's in your structure configuration
      _type: 'dailySpecial',
      name: 'Soup of the Day',
      description: 'Our delicious homemade soup',
    };
    
    const result = await client.createOrReplace(doc);
    console.log(`Document created with ID: ${result._id}`);
  } catch (error) {
    console.error('Error creating document:', error);
  }
}

createDailySpecial();




