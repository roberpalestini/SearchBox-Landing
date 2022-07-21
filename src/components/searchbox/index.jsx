import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useState } from 'react';
import { getDesafio } from './../../API/elasticsearch'

function SearchBox() {
    const [value, setValue] = useState()
    const [results, setResults] = useState([])
    const [esTwitter, setEsTwitter] = useState()
    const [esGithub, setEsGithub] = useState()
    const [esYoutube, setEsYoutube] = useState()
    const [esFacebook, setEsFacebook] = useState()
    const [esInstagram, setEsInstagram] = useState()


    


    return (
        <div className="container mt-8">
            <div className="flex align-items-center justify-content-center">
                <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                    <div className="text-center mb-5">
                        <i className="pi pi-spin pi-spinner" style={{ 'fontSize': '2em' }}></i>

                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>

                        <div className="">


                            <i
                                className="pi  pi-github"
                                style={{ 'fontSize': '2em', marginRight: "10px" }}

                            ></i>

                            <i
                                className="pi pi-twitter"
                                style={{ 'fontSize': '2em', marginRight: "10px" }}

                            ></i>

                            <i className="pi pi-youtube"
                                style={{ 'fontSize': '2em', marginRight: "10px" }}

                            ></i>


                            <i
                                className="pi  pi-instagram"
                                style={{ 'fontSize': '2em', marginRight: "10px" }}

                            ></i>

                            <i
                                className="pi  pi-facebook"
                                style={{ 'fontSize': '2em', marginRight: "10px" }}
                            ></i>
                        </div>
                        <span className="text-600 font-medium line-height-3">Select</span>
                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Need Help?</a>
                    </div>

                    <div>
                        <div className="">
                            <div className="p-inputgroup  w-full">
                                <InputText placeholder="Que estas buscando?"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                />
                                <Button icon="pi pi-search"
                                className="p-button-warning"
                                onClick={getDesafio()}
                                 />
                            </div>
                        </div>

                        <div className="flex align-items-center justify-content-center mt-4 mb-4 ">

                            <a className="font-medium no-underline text-blue-500 text-center cursor-pointer">Busque el evento, articulo, codigo de producto, entidad o documentos adjuntos.</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchBox