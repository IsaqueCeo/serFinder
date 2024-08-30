import Component from "../../components/navBar";


function Home() {
  return (
<>
<div><Component/></div>
<div><h1>hello world</h1></div>
<main style={{display:"flex"
}}>
 <div className="textoInicial">
<h1>titulo</h1>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad rerum exercitationem accusamus, minus quo, laborum dolor quas ab ut nemo repellat! Assumenda, accusantium quas fugiat qui accusamus veniam officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sint aut totam mollitia vero recusandae ducimus cum tempore vitae, officiis ipsum fuga velit. Nulla soluta molestias, ducimus quasi molestiae error!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam, voluptate illum vel libero quidem fugit maiores, fugiat, officiis expedita unde itaque! In dicta esse eveniet aperiam fuga, dolores amet!
  </p>
  <button style={{flexDirection:'column'}}>cadastre-se</button>
 </div>

  <img src="https://img.freepik.com/fotos-gratis/pessoas-negocio-apertar-mao-junto_53876-13391.jpg?t=st=1725048291~exp=1725051891~hmac=8f4cd3f484baeef1fad6049f502926b6aca7af66053476dfa19c7149f67663cd&w=996" alt="" style={{width:"500px",height:"455px"}} />
</main>

</>
  );
}



export default Home;