import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const publicDirectory = new URL("../public/", import.meta.url);
const entries = await readdir(publicDirectory, {
  recursive: true,
  withFileTypes: true,
});
const results = await Promise.all(
  entries
    .filter((entry) => entry.isFile())
    .map(async (entry) => {
      const file = join(entry.parentPath, entry.name);
      const content = await readFile(file);
      return content
        .subarray(0, 43)
        .toString()
        .startsWith("version https://git-lfs.github.com/spec/v1")
        ? file
        : null;
    })
);
const pointers = results.filter((file) => file !== null);

if (pointers.length > 0) {
  throw new Error(
    `Public assets contain Git LFS pointers instead of file contents:\n${pointers.join("\n")}\nRun git lfs pull, then git add --renormalize public and commit the assets. Alternatively, enable Git LFS in Vercel project settings and redeploy.`
  );
}
