import { Footer, Main } from "@ky-y./ui";
import type { NextPage } from "next";

import { Head } from "components/Head";
import { Header } from "components/Header";

import { Mixer } from "sections/hex-mixer";

const Password: NextPage = () => {

    return (
        <>
            <Head title="Hex Mixer | kyTools" />

            <Header />
            <Main>
                <Mixer />
            </Main>
            <Footer/>
        </>
    );
};

export default Password;
