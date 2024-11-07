// "use client";  

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        brand: {

            100: "#FF3c00",
        },
    },
    fonts: {
        body: "Open Sans, sans-serif",
    },
    styles: {
        global: () => ({
            body: {
                bg: "gray.800",
            },
        }),
    },
    components: {
        // Button
    },
    textStyles: {
        h1: {
            // you can also use responsive styles
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
    },
});