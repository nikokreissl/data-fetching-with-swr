import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("Failed to load");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
