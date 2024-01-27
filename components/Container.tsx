interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return ( 
        <div className="max-w-[1920px] mx-auto px-4 sm:px-20">
            {children}
        </div>
     );
}
 
export default Container;