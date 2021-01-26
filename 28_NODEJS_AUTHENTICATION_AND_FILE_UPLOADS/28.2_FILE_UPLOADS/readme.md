# 28.2 - NODEJS: FILE UPLOAD WITH MULTER

[Multer](https://github.com/expressjs/multer) is a middleware that helps us process file uploads and save it to a local directory for further actions.

It's main advantage is how easy it is to configure.

You can add the following code to you *express server* and be ready to handle file uploads:

```javascript
const multer = require('multer');

app.use(express.static(__dirname + '/uploads')); // this gives access to the files via browser

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },

  filename: (req, file, callback) => {
    const curatedName = `${Date.now()}-${file.originalname}`;
    callback(null, curatedName);
  }
});

const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.send().status(200)
);
```

Just by using that code on you project you can see you files are saved to the `uploads` directory.


## Exercises

Since it's a simple addition, exercises on this matter will be covered on later project, starting on [here](../Project_01_TBA)

----

#### Comments

It may seem like file uploads are rare on most APIs, but if you have an application with authentication (eg it has users), it's probable that you will need to accept files for, at least, the user profile pic.

As such, understanding the basics of multer and how it can help you organize every upload received can ease the implementation. Of course, for production applications it is recommended that you upload files to some storage provider like [Amazon S3](https://aws.amazon.com/s3/).

###### Feedback

As always, any feedback or suggestion is welcomed.

