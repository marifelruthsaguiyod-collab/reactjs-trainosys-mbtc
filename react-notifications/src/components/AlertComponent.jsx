import React from "react";

const AlertComponent = (props) => {

    const {title, type, message, children } = props;
        
    return (
        <div style={{ margin: "10px 0" }}>
            <div 
                style={{
                    padding: "15px",
                    borderRadius: "8px",
                    color: "#fff",
                    backgroundColor:
                        type === "success"
                          ? "green"
                          : type === "warning"
                          ? "orange"
                          : type === "error"
                          ? "red"
                          : "gray",
                }}
            >
                <h3>{title}</h3>

                {message && <p>{message}</p>}

                <div>{children}</div>
            </div>
        </div>
    );
};

export default AlertComponent;