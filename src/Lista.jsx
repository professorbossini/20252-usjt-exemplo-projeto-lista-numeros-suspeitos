import React from 'react'

const Lista = ({numeros}) => {
  return (
    <div>
      {numeros.map((item) => (<p className='text-center'>{item.numero}</p>))}
    </div>
  )
}

export default Lista