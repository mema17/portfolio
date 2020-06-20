
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
    }
})
export default THEME;