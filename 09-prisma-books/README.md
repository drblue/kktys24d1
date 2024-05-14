# Prisma Books

This is a simple project to demonstrate how to use Prisma with a Sqlite database. The project is a simple book management system where you can add, update, delete and view authors, books and publishers.

There is also a login system where you can register and login to the system. The login system uses JWT for authentication.

## Getting Started

1. Copy the `.env.example` file to `.env` and fill in the necessary details using your favorite editor. Also change the PORT if you want to run the server on a different port.

    ```bash
    cp .env.example .env
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the migrations:

    ```bash
    npx prisma migrate dev
    ```

4. Seed the database:

    ```bash
    npx prisma db seed
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```
