interface ContainerProps{
    children : React.ReactNode
}

const Container = ({children}: ContainerProps) => {
  return (
    <div className="max-w-[1920px] mx-auto xl:p-3 md:px-2 px-4">
      {children}
    </div>
  )
}

export default Container
