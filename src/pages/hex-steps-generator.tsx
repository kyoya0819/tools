import { Footer, Main } from "@ky-y./ui";
// import "@ky-y./ui/fonts.css";
import type { NextPage } from "next";

import { Head } from "components/Head";
import { Header } from "components/Header";

import { Generator } from "sections/hex-steps-generator";

const Password: NextPage = () => {

    return (
        <>
            <Head title="Hex Steps Generator | kyTools" />

            <Header />
            <Main>
                <Generator />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
