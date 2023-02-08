# NestJS, PostgreSQL and Angular

A nice combination for an api and app.

I started by adding config for using docker for my db and node (see docker-compose.yml, Dockerfile, and package.json)

I then added NestJS:
```
npm i -g @nestjs/cli
nest new api
cd api
npm start

# It worked
```

Then I moved in logic from an example related to typeorm so that its easy to work with the postgres db. I also added angular.

I then learned about how typeorm uses migrations. I don't need migrations for now since its the beginning and temporarily using synchronize: true, but will use it eventually. That being said, I decided to use it to populate dummy data, for now.

```
npm run typeorm:create-migration --name=PopulateData
```

Then updated the file it generated and now added that file to TypeOrmModule.forRoot options with `migrations: [PopulateData1674432771960],`.

Todo:
- Used the following to add angular and material to nrwl framework
  - npx nx add @nrwl/angular
  - npx nx add @angular/material

- Move logic from alarm-blocks with login/logout flow
- Can we use food4all app for google login? If so, great
- Begin cleaning up and have a logged in portal and a logged out portal
- Create a repo only for this
- Duplicate repo and then start making one for todoist-clone
