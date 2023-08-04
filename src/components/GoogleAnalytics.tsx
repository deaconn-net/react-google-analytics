import React from "react"

const GoogleAnalytics: React.FC<{
    tag: string
}> = ({
    tag
}) => {
    return (
        <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${tag}`} />
            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag("js", new Date());

                    gtag("config", "${tag}");
                `}
            </script>
        </>
    );
}

export default GoogleAnalytics;