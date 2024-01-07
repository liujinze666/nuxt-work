import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content');
export default defineEventHandler((event) => {
  const fileName = fs.readdirSync(postsDir);
  const posts = fileName.map((fileName) => {
    const id = fileName.replace(/.md$/, "");
    // 获取文章标题和文章创建日期
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterInfo = matter(fileContents);
    const fileInfo = fs.statSync(fullPath);
    return {
      id,
      title: matterInfo.data.title as string,
      date: fileInfo.ctime,
    };
  })
  return new Promise<
  {
    id: String,
    title: String,
    date: Date,
  }
  >((resolve) => {
    setTimeout(() => {
      posts.sort((a, b) => (a.date < b.date ? 1 : -1));
      resolve(posts);
    }, 5000);
  })
})