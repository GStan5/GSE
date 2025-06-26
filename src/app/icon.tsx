import { readFileSync } from "fs";
import { join } from "path";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  try {
    // Read the GSE logo file directly
    const logoPath = join(process.cwd(), "public", "images", "gse-logo.png");
    const logoBuffer = readFileSync(logoPath);

    return new Response(logoBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    // Fallback if logo file is not found
    return new Response(null, { status: 404 });
  }
}
