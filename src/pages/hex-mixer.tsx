import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "components/Header/Header";

import { Mixer } from "sections/hex-mixer";

const Password: NextPage = () => {

    return (
        <>
            <Head>
                <title>Hex Mixer | kyTools</title>
            </Head>
            <Header />
            <Main>
                <Mixer />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
