const Layout = ({ children }) => {
    return (
        <>

            <div className="flex flex-col items-center scroll-mt-2.5 bg-slate-200 pt-20 pb-20  ">
                {children}
            </div>
        </>
    )
}

export default Layout