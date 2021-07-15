class ListPostService {
  constructor(blogPostsRepository) {
    this.blogPostsRepository = blogPostsRepository;
  }

  async execute() {
    const posts = await this.blogPostsRepository.list();

    return posts;
  }
}

module.exports = ListPostService;
