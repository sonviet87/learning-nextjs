import * as React from 'react'
import {Box} from "@mui/system";

export function Header() {
    console.log('render header')
    return <Box component="header" py={2} textAlign="center">Header</Box>
}
