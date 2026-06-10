import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const CATALOG_PATH = path.join(process.cwd(), 'public/joyas/images');

export type CatalogCategory = {
  name: string;
  slug: string;
  image: string;
};

export type CatalogImage = {
  name: string;
  src: string;
};

export function getCategorySlug(name: string) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function isImageFile(fileName: string) {
  return IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase());
}

function getPublicImagePath(categoryName: string, imageName: string) {
  return `/joyas/images/${encodeURIComponent(categoryName)}/${encodeURIComponent(imageName)}`;
}

export function getCatalogCategories(): CatalogCategory[] {
  if (!fs.existsSync(CATALOG_PATH)) {
    return [];
  }

  return fs
    .readdirSync(CATALOG_PATH)
    .filter((item) => {
      const itemPath = path.join(CATALOG_PATH, item);
      return fs.statSync(itemPath).isDirectory();
    })
    .map((categoryName) => {
      const categoryPath = path.join(CATALOG_PATH, categoryName);
      const imageName = fs.readdirSync(categoryPath).find(isImageFile);

      if (!imageName) return null;

      return {
        name: categoryName,
        slug: getCategorySlug(categoryName),
        image: getPublicImagePath(categoryName, imageName),
      };
    })
    .filter((category): category is CatalogCategory => category !== null)
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

export function getCategoryBySlug(slug: string) {
  return getCatalogCategories().find((category) => category.slug === slug);
}

export function getCategoryImages(categoryName: string): CatalogImage[] {
  const categoryPath = path.join(CATALOG_PATH, categoryName);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  return fs
    .readdirSync(categoryPath)
    .filter(isImageFile)
    .sort((a, b) => a.localeCompare(b, 'es'))
    .map((imageName) => ({
      name: imageName,
      src: getPublicImagePath(categoryName, imageName),
    }));
}
