import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async (event) => {
  const fileName = getRouterParam(event, 'id') + '.md';
  
  // 获取文章内容
  const fullPath = path.join(postDir, fileName);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterInfo = matter(fileContent);

  // 转换 MD 为 html
  const processedContent = await remark().use(remarkHtml).process(matterInfo.content);
  const content = processedContent.toString() as string;
  return {
    title: matterInfo.data.title as string,
    content,
  }
})