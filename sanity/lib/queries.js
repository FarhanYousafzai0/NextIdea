// queries/startup.ts

export const startupQuery = `
  *[_type == "startup" && defined(slug.current)]{
    _id, 
    title, 
    slug,
    _createdAt,
    author->{
      _id,
      name,
      image,
      bio
    },
    views,
    description,
    category,
    image
  }
`;
