Lappeenrannan teknillinen yliopisto

School of Business and Management


Sofware Development Skills

Pedro Setti, xu163213


# LEARNING DIARY, FULL-STACK DEVELOPMENT MODULE

## LEARNING DIARY

I checked the general information and understood the main focus of the course, and I'm looking forward to coming up with my own project with new stills. I have worked a bit with front end and back end separately, so now I want to merge all my skills and learn how to do it professionally. I had git and all environments (VS code) setup from previously.

I initialized the repo with the learning diary markdown file and went straight into the crasch courses.

### Next.js crash course

I didn't know much about JavaScript before, so the basic explanation on how Node.js works and what it is used for was helpful for a better understanding of the bigger picture.
- Single event loop
- Register network request, initiates task, executes the code until the request is compleated and triggers the callback, then brings it to the event queue
- Used for APIs, server-rendered apps, real-time applications, web servers

Created index.js, postController.js, utils.js and edited package.json following the course (files in repo)
Learned how to create a server, work with paths and http requests
Learned about middleware functions
I was having a hard time understanding the API functionalities, but everything became a lot clearer when I created the route functions. Now I feel like I really understand APIs, how they work and their usecases

#### Node modules

- Events are useful for loose communication between parts of an app
- Paths and URLs matter for handling files, routes, and request data
- File system work is for reading, saving, and changing data on disk
- Process info helps with arguments, environment, and running the app
- OS info shows the machine details like memory and CPU
- Crypto is for securing data, hashes, and simple encryption
- HTTP servers handle requests and send pages or API responses

### MongoDB crash course

Document database, data stored like JSON/BSON
Good for flexible data and fast setup because the schema can stay open at first
One document can keep related data together instead of splitting everything into tables
Useful for CRUD apps, cloud databases, and projects that need to scale easily
Aggregation pipelines help shape data for apps, and indexes help query speed
Atlas, Compass, VS Code, and Node.js all make it easier to build and test with MongoDB

- `insertOne` and `insertMany` for adding single or multiple documents
- `find` and `findOne` for reading data and filtering what you need
- `updateOne` and `updateMany` for changing existing data without rebuilding everything
- `deleteOne` and `deleteMany` for removing old or unwanted records
- `aggregate` for shaping data before sending it to an app