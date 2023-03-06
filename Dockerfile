from node:19
WORKDIR /
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD npm run start
