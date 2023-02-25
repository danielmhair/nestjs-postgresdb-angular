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

### Todo:
- Fix Error:
NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `EnvironmentInjector#runInContext`. Find more at https://angular.io/errors/NG0203
Error: NG0203: inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with `EnvironmentInjector#runInContext`. Find more at https://angular.io/errors/NG0203
    at injectInjectorOnly (core.mjs:626:15)
    at Module.ɵɵinject (core.mjs:637:60)
    at Object.SocialAuthService_Factory [as factory] (abacritt-angularx-social-login.mjs:407:103)
    at R3Injector.hydrate (core.mjs:8121:35)
    at R3Injector.get (core.mjs:8009:33)
    at injectInjectorOnly (core.mjs:634:33)
    at Module.ɵɵinject (core.mjs:638:60)
    at Object.AuthService_Factory [as factory] (auth.service.ts:9:25)
    at R3Injector.hydrate (core.mjs:8121:35)
    at R3Injector.get (core.mjs:8009:33)
    at resolvePromise (zone.js:1211:31)
    at resolvePromise (zone.js:1165:17)
    at zone.js:1278:17
    at _ZoneDelegate.invokeTask (zone.js:406:31)
    at core.mjs:23999:55
    at AsyncStackTaggingZoneSpec.onInvokeTask (core.mjs:23999:36)
    at _ZoneDelegate.invokeTask (zone.js:405:60)
    at Object.onInvokeTask (core.mjs:24300:33)
    at _ZoneDelegate.invokeTask (zone.js:405:60)
    at Zone.runTask (zone.js:178:47)
- Fix Invalid Host error with npm start
- Duplicate repo and then start making one for todoist-clone

### Complete:

- Used the following to add angular and material to nrwl framework
  - npx nx add @nrwl/angular
  - npx nx add @angular/material
- Moved needed logic from alarm-blocks and food4all app
- Added google login through @abacritt/angularx-social-login
- Added portals for logging in and logging out
