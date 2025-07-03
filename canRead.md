## Environment Configuration

In Express apps, we often use sensitive data or config settings like:
-MongoDB URLs
-Secret keys for JWT
-Port numbers
-API keys
We don’t want to hardcode these values into our files (like server.js), especially if the code is on GitHub.
Instead, we keep them in a **.env** file like this:

```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
JWT_SECRET=someSuperSecretKey

```

**.config():**
This function:
-Reads the .env file
-Parses its content (like PORT=5000)
-Loads the variables into process.env

## CORS = Cross-Origin Resource Sharing

It’s a security mechanism built into browsers that restricts how resources on one domain can be requested from another domain.
The **browser blocks** the request by default.
Why? Because different ports = different origins.
This is where CORS comes in!

## What is path in Express?

path is a Node.js built-in module used to work with file and directory paths safely and consistently.

🔧 Why do we use it?
Because different operating systems (Windows, Linux, Mac) handle paths differently (\ vs /). path makes sure paths work everywhere.

**A SIMPLE WORKFLOW FOR UNDERSTANDING**
-Frontend sends GET /api/auth/profile
-Route → runs protect middleware first
-Checks if token is valid
-If not → send error
-If yes → go ahead
-Then run getUserProfile controller
-Fetches user from DB using the Model
-Sends back profile info


## bcrypt and JWT token
Hides your password before saving it
While registering:
-We don’t save the password directly
-Instead, we encrypt (hash) it using bcrypt
```
const hashedPassword = await bcrypt.hash(password, 10);

```
While logging in:
-We use bcrypt to compare the entered password with the hashed one:
```
const isMatch = await bcrypt.compare(enteredPassword, storedHashedPassword);
```
-If it matches ➜ user is real ➜ we give them a *JWT token*
We create a token like this:
```
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
  expiresIn: "7d",
});

```
We send this token to frontend — usually stored in localStorage or cookies.
salt = random character sequence