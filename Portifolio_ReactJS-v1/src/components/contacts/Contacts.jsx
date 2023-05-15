import './Contacts.css'

function Contacts(){
    return(
        <div>
            <div className='nav'>
                <h1>Ours Contacts</h1>
            </div>

            <div className='cont'>
            <div className='boxes'>
                    <div className='box'>
                        <h1>Bryan Vieira</h1>
                        <h2>Telefone: 9999-9999 </h2>
                        <h3>Email:</h3>
                        <h4>bryanvieira@gmail.com</h4>
                        <a href="">more information</a>
                    </div>

                    <div className='box'>
                        <h1>Gabi Onaka</h1>
                        <h2>Telefone: 9999-9999 </h2>
                        <h3>Email:</h3>
                        <h4>gabionaka@gmail.com</h4>
                        <a href="">more information</a>
                    </div>

                    <div className='box'>
                        <h1>Pimentel </h1>
                        <h2>Telefone: 9999-9999 </h2>
                        <h3>Email:</h3>
                        <h4>pimentel@gmail.com</h4>
                        <a href="">more information</a>
                    </div>
                   
                </div>
            </div>
            
        </div>

    )
}
export default Contacts;