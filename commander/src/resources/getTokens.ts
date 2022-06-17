import { Token } from "../interfaces/token.interface";

export default function getTokens() {
  const tokens: Token[] = [
    {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ2OTQxMjAsImV4cCI6MTY1NDY5NzcyMH0.xBGMCy_ls3_gyjwpKjm-rgT19O3z1UCHjV86maKzIT0",
    },
    {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTQ2OTQ2ODMsImV4cCI6MTY1NDY5ODI4M30.8uGH0EfYrruIv6ZpLyI_SNP9hEWEYB1VzXSpC3TbjHY",
    },
  ];

  return tokens;
}
