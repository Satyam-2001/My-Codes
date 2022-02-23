import React, { createContext } from 'react'

const StatusContext = createContext({
    isActing: false,
    movie: null
})

export default StatusContext