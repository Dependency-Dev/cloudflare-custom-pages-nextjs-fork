import * as fs from "node:fs";
import * as path from "node:path";
import * as cheerio from "cheerio";

function getAllHtmlFiles(dirPath: string): string[] {
  const files: string[] = [];

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllHtmlFiles(fullPath));
    } else if (path.extname(fullPath) === ".html") {
      files.push(fullPath);
    }
  }

  return files;
}

function processHtmlFile(filePath: string): void {
  try {
    const html = fs.readFileSync(filePath, "utf-8");
    const $ = cheerio.load(html);

    $('link[rel="preload"]').each((_, element) => {
      const $element = $(element);
      const as = $element.attr("as");

      if (as === "style") {
        $element.attr("rel", "stylesheet");
        $element.removeAttr("as");
      } else if (as === "font") {
        $element.remove();
      }
    });

    fs.writeFileSync(filePath, $.html());
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function main() {
  const outDir = "./out";

  try {
    if (!fs.existsSync(outDir)) {
      console.error("Directory ./out does not exist");
      return;
    }

    const htmlFiles = getAllHtmlFiles(outDir);

    for (const file of htmlFiles) {
      processHtmlFile(file);
    }

    console.log("All files processed successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
