import express from 'express';

const postsRoutes = express.Router();

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
]

postsRoutes.get('/', (_, response) => {
  return response.status(200).json({ posts });
});

postsRoutes.get('/:id', (request, response) => {
  const { id } = request.params;

  const numberedId = Number(id);

  const requestedPost = posts.find(post => post.id === numberedId)

  if (!requestedPost) {
    return response.status(404).json({ error: 'Id not found' });
  }

  return response.status(200).json(requestedPost);
});

export default postsRoutes;
