
const Linkset = ()=>{
   
    return (
    <div>
    <HashRouter>
        <ul>
            <li> <Link to='Home' > MyHome</Link></li>
            <li> <Link to='/link1' > MyLink1</Link></li>
            <li> <Link to='/link2' > MyLink2</Link></li>
            <li> <Link to='/link3' > MyLink3</Link></li>
        </ul>        
    </HashRouter>
    </div>
    )
}