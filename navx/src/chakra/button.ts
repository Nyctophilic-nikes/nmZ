import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: "30px",
        fontSize: "10pt",
        fontWeight: 700,
        _focus: {
            boxShadow: "none",
        },
    },
    sizes: {
        sm: {
            fontSize: "8pt",
        },
        md: {
            fontSize: "10pt",
            // height: "34px",
        },
    },
    variants: {
        solid: {
            color: "black",
            bg: "white",
            _hover: {
                bg: "blue.400",
            },
        },
        outline: {
            color: "white",
            border: "1px solid",
            borderColor: "white",
            _hover: {
                bg: "blue.400",
                color: "black",
                borderColor: "blue.400",
            },
        },
        oauth: {
            height: "20px",
            border: "1px solid",
            borderColor: "gray.500",
            _hover: {
                bg: "gray.500",
            },
        },
    },
};