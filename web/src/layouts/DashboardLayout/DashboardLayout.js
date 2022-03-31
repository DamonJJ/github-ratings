import NavBar from 'src/components/NavBar/NavBar'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <NavBar title={"Ruggable's Finest Github Search!"} />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
