const Header = ({name, logo}) => {
  return ( 
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
        <p>
          <span style={{
            color: 'Orange',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>Welcome</span> to this amazing <span style={{
            color: 'Yellow',
            fontSize: '20px',
            fontWeight: 'bold',
            textDecoration: 'underline'
          }}>react app</span>.
        </p>
      </header>
   );
}
 
export default Header;