import { useState } from "react";
import { DefaultTheme } from "styled-components";

import { light } from "@styles/themes";

export function useTheme() {
    const [theme, setTheme] = useState<DefaultTheme>(light);

    function handleTheme(newTheme: DefaultTheme) {
        setTheme(newTheme);
    }

    return { theme, handleTheme };
}