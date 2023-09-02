import {Spinner} from '@chakra-ui/react'

function Loading() {
    return (
        <Spinner
            thickness='4px'
            speed='0.65s'
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

export default Loading;