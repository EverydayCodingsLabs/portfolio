import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { config } from "./config/config";

export const alt = `${config.profile.name}, ${config.profile.roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const line = "#e7e7e7";
const pad = 72;
// Same dot band as the home page header (.dots in global.css)
const dots = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="150"><defs><pattern id="d" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="1.5" fill="#c9c9c9"/></pattern></defs><rect width="1200" height="150" fill="url(#d)"/></svg>`;

export default async function Image() {
  const font = (dir: string, file: string) =>
    readFile(join(process.cwd(), "node_modules/geist/dist/fonts", dir, file));
  const [light, regular, mono, avatar] = await Promise.all([
    font("geist-sans", "Geist-Light.ttf"),
    font("geist-sans", "Geist-Regular.ttf"),
    font("geist-mono", "GeistMono-Regular.ttf"),
    readFile(join(process.cwd(), "public/favicon/web-app-manifest-512x512.png")),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff",
        color: "#171717",
        fontFamily: "Geist",
      }}
    >
      <img
        src={`data:image/svg+xml,${encodeURIComponent(dots)}`}
        width={1200}
        height={150}
        style={{ borderBottom: `1px solid ${line}` }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: `0 ${pad}px`,
          marginTop: -75,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: 8,
            borderRadius: 28,
            border: `1px solid ${line}`,
            background: "#fafafa",
          }}
        >
          <img
            src={`data:image/png;base64,${avatar.toString("base64")}`}
            width={260}
            height={260}
            style={{ borderRadius: 20 }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: 80 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 300,
              letterSpacing: "-0.035em",
              lineHeight: 1,
            }}
          >
            {config.profile.name}
          </div>
          <div style={{ marginTop: 18, fontSize: 36, color: "#525252" }}>
            {config.profile.roles[0]}
          </div>
          {config.profile.availableForFreelance && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 14,
                fontSize: 28,
                color: "#737373",
              }}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  background: "#22c55e",
                }}
              />
              Available for opportunities
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: 96,
          padding: `0 ${pad}px`,
          borderTop: `1px solid ${line}`,
          fontFamily: "Geist Mono",
          fontSize: 24,
          color: "#737373",
        }}
      >
        <div>everydaycodings.com</div>
        <div>{config.profile.roles.slice(1).join("  ·  ")}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: light, weight: 300 },
        { name: "Geist", data: regular, weight: 400 },
        { name: "Geist Mono", data: mono, weight: 400 },
      ],
    },
  );
}
