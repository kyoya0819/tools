import { Root } from "@ky-y./ui";
import type { AppProps } from "next/app";

import "styles/app.scss";

// eslint-disable-next-line import/order
import "@ky-y./ui/style.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Root>
            <Component {...pageProps} />
        </Root>
    );
}

export default MyApp;
