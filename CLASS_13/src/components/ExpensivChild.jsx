import React, { Fragment, useMemo } from 'react';

const ExpensivChild = React.memo(({count}) => {
    const expensivChild = useMemo(() =>{
        let sum = 0;
        for (let i = 0 ; i < 5; i++) sum += i;
        return sum + count;
    },[count]);

  return (
    <Fragment>
      <div>Result: {expensivChild}</div>
    </Fragment>
  )
})

export default ExpensivChild
