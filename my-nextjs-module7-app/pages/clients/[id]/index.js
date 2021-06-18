import { useRouter } from 'next/router'

function ClientProjectPage(){

    const router = useRouter();

    console.log(router.query);

    function loadProjectHandler() {
        router.push(
            {
                pathname:'/clients/[id]/[clientprojectid]',
                query:{id: 'max', clientprojectid: 'projecta'},
            }
        );
    }

    return(
      <div>
        <h1>The  Project of the client page</h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
      </div>
    );
  }
  
  export default ClientProjectPage;