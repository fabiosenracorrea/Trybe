import express from 'express';

const userRoutes = express.Router();

let users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"],
    isActive: true,
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"],
    isActive: false,
  }
]

userRoutes.get('/user/:name', (request, response) => {
  const { name } = request.params;

  const requestedUser = users.find(user => user.user === name)

  if (!requestedUser) {
    return response.status(404).json({ error: 'User not found' });
  }

  return response.status(200).json(requestedUser.comments);
});

userRoutes.put('/user/:id', (request, response) => {
  const { id } = request.params;
  const { status } = request.body;

  if (typeof status !== 'boolean') {
    return response.status(400).json({ error: 'Incorrect status format' });
  }

  const requestedUser = users.find(user => user.id === Number(id))

  if (!requestedUser) {
    return response.status(404).json({ error: 'User not found' });
  }

  const updatedUser = {
    ...requestedUser,
    isActive: status,
  }

  users = users.map(user => {
    if (user.id !== Number(id)) {
      return user;
    }

    return updatedUser;
  })

  return response.status(201).json(updatedUser);
});

userRoutes.get('/comments', (request, response) => {
  const { filter } = request.query;

  const allComments = users.reduce((commentAcc, nextUser) => {
    const { comments } = nextUser.comments;

    return [...commentAcc, ...comments];
  }, []);

  if (!filter) {
    return response.status(200).json(allComments);
  }

  const filteredComments = allComments.filter((comment) => {
    const filterRegex = new RegExp(filter, 'i');

    const commentHasFilter = filterRegex.test(comment);

    return commentHasFilter;
  })

  return response.status(200).json(filteredComments);
});

export default userRoutes;
