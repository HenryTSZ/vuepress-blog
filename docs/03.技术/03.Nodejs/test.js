const str = `
import React, { useEffect } from 'react'
import { useImmer } from 'use-immer'
import { Tree, Radio } from 'antd'

// relative start
import { useStore } from '../../store'
import { format } from '../../../utils'
import interface from './interface'
import logo from '../../../assets/images/logo.png'
// relative end

import './index.scss'
`

const reg = /import.*from\s'(\.{1,2}\/.+)/g

str.replace(reg, function (match, p1, p2) {
  console.log('match:', match, 'p1:', p1, 'p2:', p2)
})

// const reg = /import.*from\s'\.{1,2}(\/.+)/g
