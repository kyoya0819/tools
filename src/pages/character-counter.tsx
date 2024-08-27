import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "components/Header/Header";

import { Counter } from "sections/character-counter";

const Password: NextPage = () => {

    return (
        <>
            <Head>
                <title>Character Counter | kyTools</title>
            </Head>
            <Header />
            <Main>
                <Counter />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
