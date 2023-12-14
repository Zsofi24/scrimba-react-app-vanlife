import React from "react"
import { Form, useLoaderData } from "react-router-dom"

export function loader({request}) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
    const formData = await request.formData()
    formData.get("email")
    return null
}

export default function Login() {

    const message = useLoaderData()

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            { message && <h2 className="red">{message}</h2>}
            <Form method="POST" className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button>Log in</button>
            </Form>
        </div>
    )

}