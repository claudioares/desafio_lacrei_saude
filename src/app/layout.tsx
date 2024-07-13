import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyle } from "./globalStyled";
import "./import.fonts.css";


export const metadata: Metadata = {
  title: "Desafio Lacrei Saúde",
  description: "Aplicação desenvolvida para o desafio da Lacrei Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <GlobalStyle />
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
    </html>
  );
}
