// Exit preview API route
import { exitPreview } from "@prismicio/next";

export function GET() {
  return exitPreview();
}
