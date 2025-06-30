// types.js
// This is a JS-friendly version of Sanity TypeGen output.
// You can import and use these as schemas or just for object references.

export const Startup = {
  _id: '',
  _type: 'startup',
  _createdAt: '',
  _updatedAt: '',
  _rev: '',
  title: '',
  slug: {
    _type: 'slug',
    current: '',
    source: ''
  },
  author: {
    _ref: '',
    _type: 'reference',
    _weak: false
  },
  views: 0,
  description: '',
  image: '',
  category: '',
  pitch: ''
};

export const Author = {
  _id: '',
  _type: 'author',
  _createdAt: '',
  _updatedAt: '',
  _rev: '',
  id: 0,
  name: '',
  username: '',
  email: '',
  image: '',
  bio: ''
};

export const Slug = {
  _type: 'slug',
  current: '',
  source: ''
};

export const SanityImageAsset = {
  _id: '',
  _type: 'sanity.imageAsset',
  _createdAt: '',
  _updatedAt: '',
  _rev: '',
  originalFilename: '',
  label: '',
  title: '',
  description: '',
  altText: '',
  sha1hash: '',
  extension: '',
  mimeType: '',
  size: 0,
  assetId: '',
  uploadId: '',
  path: '',
  url: '',
  metadata: {},
  source: {}
};

// Example reusable helper export
export const SanityTypes = {
  Startup,
  Author,
  Slug,
  SanityImageAsset
};
