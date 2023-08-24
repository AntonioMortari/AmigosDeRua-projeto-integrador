import {FiAlertCircle as AlertIcon} from 'react-icons/fi'

import {
    Alert
} from '@chakra-ui/react'



function AlertError({messageError}) {
  return (
    <Alert status="error" alignItems="center" gap="20px">
      <AlertIcon color="red" />
      {messageError}
    </Alert>
  );
}

export default AlertError;
