interface Props{
    children: string;
    onClick:()=> void;
}



export const Button = ({children,onClick}:Props) => {
  return (
    <button className='btn btn-success' onClick={onClick}>
      {children}
    </button>
  )
}

////xport default Button
