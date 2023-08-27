import {FiAlertCircle as AlertIcon} from 'react-icons/fi'

import {
    Alert
} from '@chakra-ui/react'



function AlertError({messageError}) {
  return (
    <Alert mt='20px' status="error" alignItems="center" gap="20px">
      <AlertIcon size='35' color="red" />
      {messageError}
    </Alert>
  );
}

export default AlertError;
