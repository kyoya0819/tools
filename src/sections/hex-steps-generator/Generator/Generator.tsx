import { Card, Code, Section } from "@ky-y./ui";
import { Roboto_Mono } from "next/font/google";
import { FC, useEffect, useState } from "react";

import { cn } from "scripts/cn";

import scss from "./Generator.module.scss";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const Generator: FC = () => {
    const [hex1, setHex1] = useState<string>("000000");
    const [hex2, setHex2] = useState<string>("FFFFFF");
    const [steps, setSteps] = useState<number>(10);

    const [hex, setHex] = useState<string[]>([]);

    const [disable, setDisable] = useState<boolean>(true);

    useEffect(() => {
        const hexF = [hex1, hex2].map(
            hex => hex.replace(/[^0-9a-fA-F]/gi, "")
        );

        if (hexF[0].length !== 3 && hexF[0].length !== 6) return setDisable(true);
        if (hexF[1].length !== 3 && hexF[1].length !== 6) return setDisable(true);
        if (steps < 2 || 255 < steps) return setDisable(true);

        setDisable(false);

        const hexA = hexF.map(hex => {
            const hex_length = hex.length / 3;
            const regex = new RegExp(`.{${hex_length}}`, "g");
            const match = hex.match(regex);

            if (!match)
                throw new Error("Error!");

            return match.map(digit => digit.length === 1
                ? parseInt(digit + digit, 16)
                : parseInt(digit, 16)
            );
        });

        const hex1A = hexA[0];
        const hex2A = hexA[1];

        const genHexs = (hex1: number[], hex2: number[], steps: number) => {

            const diff = hex1.map((v, i) => {
                return hex2[i] - v;
            });

            return Array(steps).fill("").map((_, i) => {

                return [
                    hex1[0] + (diff[0] / (steps - 1) * i),
                    hex1[1] + (diff[1] / (steps - 1) * i),
                    hex1[2] + (diff[2] / (steps - 1) * i)
                ];
            });
        };

        const hexs = genHexs(hex1A, hex2A, steps);

        setHex(
            hexs.map(hex => {
                return "#" + hex.map((v) => {
                    return ("00" + Math.round(v).toString(16)).slice(-2);
                }).join("");
            })
        );


    }, [hex1, hex2, steps]);

    return (
        <Section inner="xs">
            <Card className={scss.card}>
                <div className={scss.form}>
                    <div className={scss.inputHex}>
                        <span>#</span>
                        <input
                            type="text" value={hex1} onChange={e => setHex1(e.target.value)}
                            maxLength={6} className={inter.className}
                        />
                    </div>
                    <div className={scss.wave}>〜</div>
                    <div className={scss.inputSteps}>
                        <span>Steps:</span>
                        <input
                            type="number" value={steps} onChange={e => setSteps(Number(e.target.value))}
                            min={2} max={255} className={inter.className}
                        />
                    </div>
                    <div className={scss.wave}>〜</div>
                    <div className={scss.inputHex}>
                        <span>#</span>
                        <input
                            type="text" value={hex2} onChange={e => setHex2(e.target.value)}
                            maxLength={6} className={inter.className}
                        />
                    </div>
                </div>
                <div className={cn(scss.result, inter.className, (disable ? scss.disable : ""))}>
                    { hex.map((v, i) => <div key={ i }>{ v }</div>) }
                </div>
                <Code
                    language="SCSS"
                    code={ hex.map((v, i) => `$color-${i * 100}: ${v};`).join("\n") }
                />
            </Card>
        </Section>
    );
};