export const TechIcon = ({component}: { component: React.ElementType }) => {
    // Capitalize component
    const Component = component;
    return (
        <>
            <Component className="size-10 fill-[url(#tech-icon-gradient)]"/>
            {/* Gradient SVG */}
            <svg className="size-0 absolute">
                <linearGradient id="tech-icon-gradient">
                    <stop stopColor="rgb(110 231 183)" offset="0%" />
                    <stop stopColor="rgb(56 189 248)" offset="100%" />
                </linearGradient>
            </svg>
        </>
    );
}