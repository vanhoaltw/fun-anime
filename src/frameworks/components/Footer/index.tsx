import { CONTACT } from "../../../../constant"
export const Footer = ()=>{
    return(
        <footer className=" text-center text-white mt-3">
            <div className="container p-1">
                <section>
                    {CONTACT.map(value=>(        
                        <a className="btn btn-sm btn-outline-light btn-floating ml-1" target='_blank' href={value.link} role="button" key={value.app} data-toggle="tooltip" data-placement="top" title={value.app} rel="noreferrer">
                            {value.icon}
                        </a>
                    ))}
                </section>
            </div>
        </footer>
    )
}