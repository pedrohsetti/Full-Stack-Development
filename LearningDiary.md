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

### Express crash course

Web framework for Node.js
Building backend APIs consumed by front-end frameworks
Simplifies process of handling HTTP req and res
Different ways to do same thing, bare necessities, flexible structure
When implementing the __dirname workaround, the root path showed a 404 instead of the home page. Moved express.static before the notFound middleware.
Frontend form submission was logging POST requests in the console, but the post controller wasn't logging anything, and no posts were being created. Postman requests worked perfectly. The HTML input field had an `id="title"` but was missing the `name` attribute. FormData API reads from the `name` attribute, not `id`, so `formData.get('title')` was returning `null`.
EJS lets me render dynamic HTML by passing data from the route to the view.

### React crash course

React makes it easy to create dynamic applications, with many triggers and reactions. The challenge is to manage multiple files, folder structures, import/export, and props, when even in small applications it gets pretty convoluted. That's why readability and organisation is so important.
There was a routing bug because the tutorial used old React Router syntax. Fixed by wrapping Route into Routes element, which showed me how small version mismatches can break navigation completely.
The course navigated me through working on the task tracker app and, in the end, I connected it to a json-server backend, which made the app feel more like a real project instead of only a frontend demo.
- Learned how to split the app into reusable components like Header, Tasks, Task, About, and Footer
- Used useState and useEffect to load tasks from the server and keep the UI updated when tasks are added, deleted, or toggled
- Added react-router-dom so the app can move between the main task view and the About page (`<Link>` element instead of `<a>` tag for seamless navigation without reloading the page)
- State often needs to be lifted into App so props can be passed down more cleanly
- App depends on the correct and exact route names, ids, and request methods, so small mismatches can completely break it