import BasicCard from "../../components/cardHome";
import MinMaxRatio from "../../components/carroselHome";
import Component from "../../components/navBar";

function Home() {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <Component />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>hello world</h1>
      </div>
      <main style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', gap: '20px' }}>
        <div style={{ flex: '1', maxWidth: '600px' }}>
          <div className="textoInicial" style={{ marginBottom: '20px' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Título</h1>
            <p style={{ lineHeight: '1.6', fontSize: '1rem', color: '#333' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ad rerum exercitationem accusamus, minus quo, laborum dolor quas ab ut nemo repellat! Assumenda, accusantium quas fugiat qui accusamus veniam officia! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sint aut totam mollitia vero recusandae ducimus cum tempore vitae, officiis ipsum fuga velit. Nulla soluta molestias, ducimus quasi molestiae error!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam laboriosam, voluptate illum vel libero quidem fugit maiores, fugiat, officiis expedita unde itaque! In dicta esse eveniet aperiam fuga, dolores amet!
            </p>
            <button style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Cadastre-se
            </button>
          </div>
        </div>

        <div style={{ flex: '1', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="https://img.freepik.com/fotos-gratis/pessoas-negocio-apertar-mao-junto_53876-13391.jpg?t=st=1725048291~exp=1725051891~hmac=8f4cd3f484baeef1fad6049f502926b6aca7af66053476dfa19c7149f67663cd&w=996"
            alt="Business handshake"
            style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '10px', marginBottom: '20px' }}
          />   
      
        </div>
      </main>
           <BasicCard/>
           <MinMaxRatio/>
    </>
  );
}

export default Home;
