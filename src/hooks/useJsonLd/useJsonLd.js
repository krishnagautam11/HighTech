import { useEffect } from "react";

export function useJsonLd(schemaObject) {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify(schemaObject);
        document.head.appendChild(script);
        
        return () => {
            document.head.removeChild(script);
        };
    }, [schemaObject]);
}
