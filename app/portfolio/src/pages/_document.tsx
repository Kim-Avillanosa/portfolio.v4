import { Head, Html, Main, NextScript } from "next/document";
import { Theme, ThemePanel } from "@radix-ui/themes";

export default function Document() {
  return (
    <Html lang="en">
      <body>
        <Head />
        <Theme
          accentColor="crimson"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <Main />
          <NextScript />
        </Theme>
      </body>
    </Html>
  );
}
