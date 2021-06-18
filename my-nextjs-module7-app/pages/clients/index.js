import Link from 'next/link';

function ClientPage(){
        const Clients =[
            { id: "max", name: "maximilian"},
            { id: "manu", name: "manual"},
        ]
    return(
      <div>
        <h1>The Cleint page</h1>
        <ul>
            {Clients.map(cleint => ( 
            <li key={cleint.id}>
                <Link href={{
                    pathname: '/clients/[id]',
                    query: {id: cleint.id}
                }}>{cleint.name}</Link>
            </li>))}
        </ul>
      </div>
    );
  }
  
  export default ClientPage;