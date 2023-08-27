import { AiFillCheckCircle as CheckIcon } from 'react-icons/ai'

import {
    Alert
} from '@chakra-ui/react'

function AlertSucess({ txt }) {
    return (
        <Alert mt='10px' status='success' display='flex' gap='20px'>
            <CheckIcon color='green' size='35' />
            {txt}
        </Alert>
    );
}

export default AlertSucess;