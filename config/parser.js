// parser.js
import { parse } from 'yaml';
import { join } from 'path';

const parseFile = (filePath) => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedFile = parse(fileContent);
    return parsedFile;
  } catch (error) {
    console.error(`Error parsing file: ${filePath}`);
    throw error;
  }
};

const loadConfig = (filePath) => {
  const configPath = join(process.cwd(), filePath);
  const config = parseFile(configPath);
  return config;
};

export { loadConfig };