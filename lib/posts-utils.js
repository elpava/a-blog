import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sizeOf from 'image-size';

const postsDirectory = path.join(process.cwd(), 'store', 'articles');
const postImagesDirectory = path.join(process.cwd(), 'public');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

function getPostImagesFile(folderIdentifier) {
  if (process.env.POST_IMAGE_FOLDER) {
    const postImagesDir = path.join(
      postImagesDirectory,
      process.env.POST_IMAGE_FOLDER,
      folderIdentifier
    );

    return fs.readdirSync(postImagesDir);
  }

  const postImagesDir = path.join(postImagesDirectory, folderIdentifier);
  return fs.readdirSync(postImagesDir);
}

function getImagesDimensions(postPath) {
  const postImagesfilename = getPostImagesFile(postPath);

  const dimensions = {};

  if (process.env.POST_IMAGE_FOLDER) {
    postImagesfilename.forEach(
      image =>
        (dimensions[image] = sizeOf(
          `${postImagesDirectory}/${process.env.POST_IMAGE_FOLDER}/${postPath}/${image}`
        ))
    );

    return dimensions;
  }

  postImagesfilename.forEach(
    image =>
      (dimensions[image] = sizeOf(
        `${postImagesDirectory}/${postPath}/${image}`
      ))
  );
  return dimensions;
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const { category } = data;
  const categorySlug = category.replace(' ', '-');
  const imagesDimensions = getImagesDimensions(postSlug);

  data.imagesDimensions = imagesDimensions;

  const postData = {
    slug: postSlug,
    categorySlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPostFiles = postFiles.map(postFile => getPostData(postFile));

  const sortedPosts = allPostFiles.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter(post => post.isFeatured);

  return featuredPosts;
}

export function getAllPostsCategorySlug() {
  const allPosts = getAllPosts();

  const categorySlug = allPosts.map(post => {
    return post.categorySlug;
  });

  const uniqueCategorySlug = [...new Set(categorySlug)];

  return uniqueCategorySlug;
}

export function getAllPostsCategoryName() {
  const allPosts = getAllPosts();

  const categories = allPosts.map(post => {
    return post.category;
  });

  const uniqueCategory = [...new Set(categories)];

  return uniqueCategory;
}

export function getPostsByCategory(categoryIdentifier) {
  const category = categoryIdentifier.replace('-', ' ');

  const allPosts = getAllPosts();

  const filteredPosts = allPosts.filter(post => post.category === category);

  return filteredPosts;
}

export function getAllPostsByCategory() {
  const AllPostsCategoryName = getAllPostsCategoryName();

  const groupedPostsByCategory = AllPostsCategoryName.map(category => {
    const posts = getPostsByCategory(category);
    const slug = category.replace(' ', '-');

    return { category, posts, slug };
  });

  return groupedPostsByCategory;
}

export function getMostViewedPosts() {
  const allPosts = getAllPosts();

  const mostViewedPosts = allPosts.filter(post => post.mostViewed);

  return mostViewedPosts;
}

export function getAllTags() {
  const allPosts = getAllPosts();
  const filteredTags = allPosts.map(post => post.tags);

  return filteredTags;
}
