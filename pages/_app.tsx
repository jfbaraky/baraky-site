import type { AppProps } from "next/app";
import { GlobalStyle } from "../src/components/styles";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
