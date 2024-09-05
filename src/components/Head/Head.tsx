import NextHead from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";

export const Head: FC<{
    title: string,
    description?: string
}> = ({ title, description }) => {
    const pathname = useRouter().pathname;

    return (
        <NextHead>
            <title>{ title }</title>
            <meta name="description" content={ description ?? "This site publishes tools created by ky-y." } />
            <meta property="og:url" content={`https://beta.tools.ky-y.app${pathname}`} />
            <meta property="og:type" content={ pathname === "/" ? "website" : "article" } />
            <meta property="og:title" content={ title } />
            <meta property="og:description" content={ description ?? "This site publishes tools created by ky-y." } />
            <meta property="og:site_name" content="kyTools | ky-y." />
            <meta property="og:image" content="https://beta.tools.ky-y.app/ogp.png" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/manifest.json" />
        </NextHead>
    );
};