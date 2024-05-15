const AuthLayout = ({children} : { children: React.ReactNode }) => {
    return (
        <div className="flex h-full justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500 to-[#0C1029]">{children}</div>
    )
}

export default AuthLayout