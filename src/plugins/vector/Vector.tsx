'use client'; // Si estás usando Next.js 13+ con App Router

import { useRouter } from 'next/navigation'; // Para App Router (Next.js 13+)
// O usa: import { useRouter } from 'next/router'; // Para Pages Router (Next.js 12 y anteriores)

export default function Vector() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Previene el comportamiento por defecto del form

        // Opcional: Validar el formulario aquí
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Redirigir a la página
        router.push('/getting-your-guide');
    };

    return (
        <div className="card rounded-3 border-info mb-5">
            <div className="card-body p-4 p-md-5">
                <h3 className="card-title my-4">Get Your Free Guide Today</h3>

                <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" defaultValue="Mark" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" defaultValue="Otto" required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Country</label>
                        <select className="form-select" aria-label="Default select example" id="validationCustom03">
                            <option defaultValue="Uruguay">Uruguay</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" defaultValue="name@example.com" required />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="invalidCheck" required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Agree to terms and conditions
                            </label>
                            <div className="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pb-5">
                        <button className="btn btn-warning w-100" type="submit">Submit form</button>
                    </div>
                </form>
            </div>
        </div>
    );
}