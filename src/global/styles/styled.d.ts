import 'styled-components';
import light from './light';

declare module "styled-components" {
    type ThemeType = {
        title: string,
        colors: {
            primary: string;
            primary_opacity: string;
            background: string;
            text: string,

            black: string;
            white: string;
            gray: string;

            off: string,
            on: string
        },
        fonts: {
            title: string;
            text: string;
            complement: string;
        }
    };

    export interface DefaultTheme extends ThemeType { }
}