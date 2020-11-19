import React from "react";
import { node } from "prop-types"


export default function Screen({children}) {
    return (
        <>
            <header />
            {children}
        </>
    );
}

Screen.propTypes = {
    children: node.isRequired,
};