import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'sitemap.xml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  res.setHeader('Content-Type', 'text/xml');
  res.send(fileContents);
}
