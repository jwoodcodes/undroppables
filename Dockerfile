FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma
COPY . .

RUN npx prisma generate

# Build the Next.js application
RUN npm run build

EXPOSE 3000 

# Start the application in production mode
CMD ["npm", "start"]
