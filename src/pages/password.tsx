import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";

import { Head } from "components/Head";
import { Header } from "components/Header";

import { Generator } from "sections/password";

const Password: NextPage = () => {

    return (
        <>
            <Head title="Password Maker | kyTools" />

            <Header />
            <Main>
                <Generator />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
