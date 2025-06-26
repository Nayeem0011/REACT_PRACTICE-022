import React from 'react'

const MemoizedButton = React.memo(({onClick, label}) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
})

export default MemoizedButton
