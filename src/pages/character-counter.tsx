import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";

import { Head } from "components/Head";
import { Header } from "components/Header";

import { Counter } from "sections/character-counter";

const Password: NextPage = () => {

    return (
        <>
            <Head title="Character Counter | kyTools" />

            <Header />
            <Main>
                <Counter />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
