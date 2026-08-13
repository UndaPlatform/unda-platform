import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { buildConfig } from "payload";
import sharp from "sharp";
import { CaseStudies } from "./collections/case-studies";
import { Categories } from "./collections/categories";
import { Media } from "./collections/media";
import { Posts } from "./collections/posts";
import { Services } from "./collections/services";
import { Testimonials } from "./collections/testimonials";
import { Users } from "./collections/users";
import { ContactGlobal } from "./globals/contact";
import { HomeGlobal } from "./globals/home";
import { ServicesGlobal } from "./globals/services";
import { StudioGlobal } from "./globals/studio";
import { WorkGlobal } from "./globals/work";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Categories, CaseStudies, Testimonials, Posts, Services],
  globals: [HomeGlobal, StudioGlobal, ServicesGlobal, WorkGlobal, ContactGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN ?? "",
    }),
  ],
});
