import React from "react";

function App() {
    return (
        <div
        style={{
            backgroundColor: "#e0e0e0",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <div
            style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            width: "350px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            }}
        >
            <h2
            style={{
                textAlign: "center",
                marginBottom: "20px",
            }}
            >
            Student Registration Form
            </h2>

            <form
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
            }}
            >
            <input
                type="text"
                placeholder="Student Name"
                style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                }}
            />

            <input
                type="email"
                placeholder="Email"
                style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                }}
            />

            <input
                type="password"
                placeholder="Password"
                style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                }}
            />

            <input
                type="text"
                placeholder="Course"
                style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                }}
            />

            <input
                type="tel"
                placeholder="Mobile Number"
                style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
                }}
            />

            <button
                type="submit"
                style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                }}
            >
                Register
            </button>
            </form>
        </div>
        </div>
    );
    }

    export default App;