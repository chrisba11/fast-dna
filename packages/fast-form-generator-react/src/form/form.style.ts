import { toPx } from "@microsoft/fast-jss-utilities";
import { applyCleanListStyle, colors } from "../utilities/form-input.style";
import { ComponentStyles } from "@microsoft/fast-jss-manager";
import { FormClassNameContract } from "../class-name-contracts/";

const styles: ComponentStyles<FormClassNameContract, {}> = {
    form_breadcrumbs: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "4px",
        fontSize: "11px",
        lineHeight: "15px",
        paddingBottom: "12px",
        ...applyCleanListStyle(),
        "& li": {
            display: "inline-block",
            paddingRight: toPx(8),
            "&::after": {
                content: "'/'",
                paddingLeft: toPx(8),
            },
            "&:last-child::after": {
                content: "''",
                paddingLeft: "0",
            },
            "& a": {
                color: colors.pink,
            },
        },
    },
};

export default styles;
