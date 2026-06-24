export  function Header(){
  return(  
    <header className="border-b bg-white">
        <nav className="mx-auto flex max-w-7x1 gap-6 p-4 text-sm font-medium">
           
            <a Link="/" className="hover:text-blue-500">
                Base
            </a>
           
            <a Link="/Products" className="hover:text-blue-500">
                Products
            </a>
           
            <a href="/about" className="hover:text-blue-500">
                About
            </a>

        </nav>
    </header>
  )
}
