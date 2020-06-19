
import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet/themes'

const AZURE = "#03ccf7";
const PINK = "#F60C86";
const DEEPBLUE = "#1670f7";
const DARKGRAY = "#3B3838";
const WHITE = "#fff";
const BLACK = "#000";

const THEME = deepMerge(grommet, {
    global: {
        colors: {
            'brand': AZURE,
            'accent-1': DEEPBLUE,
            'accent-2': PINK,
            'text': DARKGRAY,
            'white': WHITE,
            'black': BLACK,
        },
        font: {
            family: 'Roboto-regular',
            size: '1.6rem'
        },
    },
    // button: {
    //     border: {
    //         radius: '0.3rem',
    //         color: WHITE,
    //     },
    //     padding: {
    //         vertical: '1.5rem',
    //         horizontal: '3rem',
    //     },
    //     color: AZURE,
    //     extend: props => `
    //                 background-color:${WHITE};
    //                 font-weight: normal;
    //                 box-shadow: 0 0.8rem 3rem -0.6rem rgba(0, 0, 0, 0.3);
    //                 text-decoration: none;
    //                 :focus{
    //                     outline: 0.1rem dashed ${WHITE};
    //                     outline-offset: 0.2rem;
    //                     border: 0.1rem solid ${WHITE};
    //                 }
    //                 `

    // },
})
export default THEME;