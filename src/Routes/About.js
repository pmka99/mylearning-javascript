import TodoApi from "../Api/todos"
export default function About(){

    TodoApi.post('lang=en&search_last_name=salam&search_first_name=&search_iccrc_number=&search_membership_status=&search_company_name=&search_agent=&search_country=&search_province=&search_postal_code=&search_city=&search_street=')
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    
    
    return(
        <>
            <div className="container-sm" id="app1" style={{color:'white'}}>
                <div className="card" style={{margin: '5px',background:'rgb(200,100,20)'}}>
                    <h4 style={{color:'black'}}><strong>About Page</strong></h4>
                    <p>This is About Page!</p>
                </div>
            </div>
        </>
    )
}