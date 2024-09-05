import { Footer, Main } from "@ky-y./ui";
// import "@ky-y./ui/fonts.css";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "components/Header/Header";

import { Generator } from "sections/hex-steps-generator";

const Password: NextPage = () => {

    return (
        <>
            <Head>
                <title>Hex Steps Generator | kyTools</title>
            </Head>
            <Header />
            <Main>
                <Generator />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
