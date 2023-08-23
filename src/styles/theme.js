import {extendTheme} from '@chakra-ui/react'

// tema 
const theme = {
    COLORS:{
        blue:'#0077FE',
        blue_light:'#319AFB',
        blue_hover:'#0065D9',
        blue_active:'#EAEEFF',

        orange:'#FF9925',

        dark_gray:'#3B3B3B',
        light_gray:'#565656',
        
        white_200:'#EFEFEF',
        white_100:'#F6F6F6'
    }
}

// tema chakra
const themeChakra = extendTheme({
    colors:{
        blue:'#0077FE',
        blue_light:'#319AFB',
        blue_hover:'#0065D9',
        blue_active:'#EAEEFF',

        orange:'#FF9925',

        dark_gray:'#3B3B3B',
        light_gray:'#565656',
        
        white_200:'#EFEFEF',
        white_100:'#F6F6F6'
    }
})

export {theme,themeChakra}
