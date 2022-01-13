import React from 'react'
import { Alert, Stack } from "@mui/material";

function PopupMsg({type, text}) {
  /**
   * type <= error, warning, info, success
   */
  return (
    <>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={type}>{text}</Alert>
    </Stack>
    </>
  )
}

export default PopupMsg