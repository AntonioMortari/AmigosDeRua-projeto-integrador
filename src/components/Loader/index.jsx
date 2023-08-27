import {Spinner} from '@chakra-ui/react'

function Loader() {
    return ( 
        <Spinner 
            thickness='5px'
            speed='1s'
            emptyColor='gray.200'
            color='blue'
            size='xl'
            position='absolute'
            top='50%'
            left='50%'
            translate='-50% -50%'
        />
     );
}

export default Loader;