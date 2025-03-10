const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

// models
const User = require('../models/user');
const Category = require('../models/post_category');

const seedData = async () => {
    try {
        dotenv.config();

        // connect to MongoDB
        await mongoose.connect(`mongodb+srv://jbsc:abc%4012345@jbsc-db.global.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000`);
        console.log('Connected to MongoDB');

        const salt = 10;

        // seed Users
        const users_data = [
            { name: 'Ahsan Ali', username: 'ahsan.ali', email: 'ahsan@gmail.com', password: 'ahsan11', status: 1, isAdmin: 1 },
            { name: 'Zeeshan', username: 'zeeshan', email: 'zeeshan@gmail.com', password: 'zeeshan11', status: 1, isAdmin: 1 },
            { name: 'Test User', username: 'test.user', email: 'test@gmail.com', password: 'test11', status: 1, isAdmin: 0 },
        ];

        // convert passwords into hash
        const users = await Promise.all(
            users_data.map(async user => ({
                ...user,
                password: await bcrypt.hash(user.password, salt),
            }))
        );

        await User.deleteMany(); // clear existing data
        const createdUsers = await User.insertMany(users);
        console.log(`Inserted ${createdUsers.length} users`);

        // seed categories
        const categories = [
            { name: 'Category 01', status: 1 },
            { name: 'Category 02', status: 1 }
        ];

        await Category.deleteMany(); // clear existing data
        const createdCategories = await Category.insertMany(categories);
        console.log(`Inserted ${createdCategories.length} categories`);

        // Close the connection
        mongoose.connection.close();
        console.log('Database seeding completed');
    } catch (err) {
        console.error('Error seeding the database:', err);
        mongoose.connection.close();
    }
};

seedData();
