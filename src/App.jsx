import './App.css'
import img from './img/img-perfil.png'


function App() {

  return (
    <>
      <div className='conteudo'>
      <div>
        <img className='img' src={img} alt="Foto do Perfil." />
        <div className='info-text'>
          <h1 className='title'>Laura Papelaria Personalizados</h1>
          <p>tudo para sua festa!</p>
        </div>
      </div>
      <div className='card'>
        <a className='btn' rel='noreferrer' target="_blank" href="https://wa.me/552197748-0988">ORÇAMENTO</a>
        <a className='btn' rel='noreferrer' target="_blank" href="https://www.instagram.com/laura_personalizados1/">INSTAGRAM</a>
        <a className='btn' rel='noreferrer' target="_blank" href="#">TIKTOK</a>
        <a className='btn' rel='noreferrer' target="_blank" href="http://shopee.com.br/laura.barbeto">SHOPEE</a>
      </div>
      <div className='rodape'>
        <p>© Laura Papelaria Personalizados - Todos os direitos reservados.</p>
      </div>
      </div>
      <div className='box-blur'>
        <div className='blur'></div>
        <div className='blur2'></div>
      </div>
    </>
  )
}

export default App
