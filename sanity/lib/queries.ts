import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY =
  defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search ] | order(_createdAt, desc) {
  _id,
  slug,
  _createdAt,
  title,
  views,
  image,
  author -> {
    _id, image, name, username
  },
  category,
  description
}`)


export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id,
  slug,
  _createdAt,
  title,
  views,
  image,
  author -> {
    _id, image, name, username, bio
  },
  pitch,
  category,
  description
}`)



export const STARTUP_VIEWS_QUERY = defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id, views
}`)

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`*[_type == "author" && id == $id][0]{
  _id,
  id, 
  name,
  username, 
  email,
  image,
  bio,
}`)

export const AUTHOR_BY_ID_QUERY = defineQuery(`*[_type == "author" && _id == $id][0] {
  username,
}`)

export const AUTHOR_BY_USERNAME_QUERY = defineQuery(`*[_type == "author" && username == $username][0] {
  _id,
  id, 
  name,
  username, 
  email,
  image,
  bio,
}`)

export const STARTUPS_BY_AUTHOR_QUERY = defineQuery(`*[_type == "startup" && author->username == $username] | order(_createdAt, desc) {
  _id,
  slug,
  _createdAt,
  title,
  views,
  image,
  author -> {
    _id, image, name, username
  },
  category,
  description
}`)

export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      username,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
