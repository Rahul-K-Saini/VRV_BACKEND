import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
import { connectToDB } from './config/db.js';

dotenv.config();
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    const resFromDB = await connectToDB();
    if (!resFromDB.success) {
      console.log('Database connection failed:', resFromDB.message);
      process.exit(1);
    }

    console.log(resFromDB.message);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log('Server startup failed:', error);
    process.exit(1);
  }
}

startServer();