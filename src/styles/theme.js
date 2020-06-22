
import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet/themes'

import colors from './colors'

const THEME = deepMerge(grommet, {
    global: {
        colors: {
            'brand': colors.AZURE,
            'accent-1': colors.DEEPBLUE,
            'accent-2': colors.PINK,
            'text': colors.DARKGRAY,
            'white': colors.WHITE,
            'black': colors.BLACK,
        },
        font: {
            family: 'Roboto-regular',
            size: '1.6rem',
            color: colors.DARKGRAY
        },
    }
})
export default THEME;