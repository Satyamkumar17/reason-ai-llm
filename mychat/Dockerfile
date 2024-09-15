
FROM node:18-alpine

# Setting the working directory in the container
WORKDIR /app

RUN pwd

# Coping the rest of your application code
COPY . .

RUN npm install

EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]
