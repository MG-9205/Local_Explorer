# Local Explorer

## Introduction  
**Local Explorer** is a community-driven platform designed to help users discover and explore local places more meaningfully through authentic, user-generated content. Users can share reviews, upload photos, and recommend their favorite spots, fostering a vibrant and engaging community.

## Features  
- **User Authentication**: Secure login and registration.  
- **Place Discovery**: Search and explore local places with advanced filtering options.  
- **Reviews and Ratings**: Share your experiences through reviews and ratings.  
- **Image Uploads**: Add images to reviews or places to give better visual insights.   
- **Tags and Categories**: Organize and discover places using tags and categories.  
- **Interactive Maps**: Visualize places using Map APIs for seamless navigation.  

## Tech Stack  
- **Frontend**: React.js, Tailwind CSS, Flowbite  
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL with Prisma ORM  
- **Map Integration**: OpenStreetMap and Google Maps API  
- **3D Visualization**: Three.js for interactive elements

## Webapp Showcase

[![Watch the video](https://img.youtube.com/vi/rkubqubrqo8/0.jpg)](https://www.youtube.com/watch?v=rkubqubrqo8)

## Installation  

### Prerequisites  
- Node.js and npm installed  
- PostgreSQL database setup  
- API keys for OpenStreetMap/Google Maps  

### Steps  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/local-explorer.git
   cd local-explorer

2. Install dependencies:
   ```
    npm install
  
3. Set up environment variables:
   ```
   Create a .env file in the root directory with the following variables:
   DATABASE_URL=your_database_url
   DIRECT_URL=your_direct_url
   MAP_API_KEY=your_map_api_key

4. Run database migrations:
   ```
   npx prisma migrate dev
   
5. Start the server:
   ```
   npm start

Project Structure
```
local-explorer/
├── src/
│   ├── components/   # React components
│   ├── pages/        # Application pages
│   ├── assets/       # Images and static files
│   └── utils/        # Helper functions
├── prisma/
│   └── schema.prisma # Database schema
├── public/           # Public assets
├── .env              # Environment variables
└── README.md         # Project documentation

```
6. Backend Code Link:
```
https://github.com/MG-9205/Local-Explorer-backend.git   
